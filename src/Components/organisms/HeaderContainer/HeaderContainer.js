import React from "react";
import "./HeaderContainer.css";
import LinkContainer from "../../molecules/LinkContainer/LinkContainer";
import LogoContainer from "../../molecules/LogoContainer/LogoContainer";

export default function HeaderContainer() {
    return <div className="header-container">
        <LogoContainer />
        <LinkContainer />
    </div>;
}