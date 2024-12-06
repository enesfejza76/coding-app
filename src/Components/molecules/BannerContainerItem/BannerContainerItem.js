import React from "react";
import "./BannerContainerItem.css";
import BannerHeader from "../../atoms/BannerHeader/BannerHeader";
import BannerDescription from "../../atoms/BannerDescription/BannerDescription";
import BannerSearchBarInput from "../../atoms/BannerSearchBarInput/BannerSearchBarInput";
import BannerSearchBarIcon from "../../atoms/BannerSearchBarIcon/BannerSearchBarIcon";

export default function BannerContainerItem() {
    return <div className="BannerContainerItem">
        <BannerHeader title="Learn to Code" />
        <BannerDescription description="With the world's largest web developer site." />
        <div className="BannerContainerSearch">
            <BannerSearchBarInput />
            <BannerSearchBarIcon />
        </div>
    </div>
}