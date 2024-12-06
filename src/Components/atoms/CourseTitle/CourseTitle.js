import React from "react";
import "./courseTitle.css";

export default function CourseTitle({ title, style }) {
    return <h1 style={style} className="courseTitle">{title}</h1>
}