import React from "react";
import "./Home.css";
import Header from "../../Components/templates/Header/Header";
import Banner from "../../Components/templates/Banner/Banner";

export default function Home() {
    return (
        <div className="container">
            <Header />
            <Banner />
        </div>
    )
}