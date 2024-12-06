import React from "react";
import "./BannerSearchBarIcon.css";
import SearchIcon from "../../assets/svg/search-icon.svg";

export default function BannerSearchBarIcon() {
    return <button className="bannerSearchBarIcon">
        <span>
            <img src={SearchIcon} alt="Search icon" />
        </span>
    </button>
}