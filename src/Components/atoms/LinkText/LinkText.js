import React from "react";
import { Link } from "react-router-dom";
import "./LinkText.css";

export default function LinkText() {
    return <>
        <Link to="/">Our Courses</Link>
        <Link to="/Html and CSS Course">Html & CSS</Link>
        <Link to="/">JavaScript</Link>
        <Link to="/">PHP</Link>
        <Link to="/">MySQL</Link>
    </>
}