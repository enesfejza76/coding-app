import React from "react";
import "./BannerHeader.css";

export default function BannerHeader({ title }) {
    return <h1 className="bannerHeader">{title}</h1>;
}