import React from "react";
import "./CourseLink.css";
import { Link } from "react-router-dom";

export default function CourseLink({ title, link, style }) {
    return <Link style={style} className="courseLink" to={link}>{title}</Link>
}