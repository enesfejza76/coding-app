import React from "react";
import "./CourseLinkContainer.css";
import CourseLink from "../../atoms/CourseLink/CourseLink";

export default function CourseLinkContainer({
    style1, style2,
    style3, style4,
    style5, style6,
    link1, title1,
    link2, title2,
    link3, title3,
    link4, title4,
    link5, title5,
    link6, title6,
}) {
    return <div className="CourseLinkContainer">
        <CourseLink style={style1} link={link1} title={title1} />
        <CourseLink style={style2} link={link2} title={title2} />
        <CourseLink style={style3} link={link3} title={title3} />
        <CourseLink style={style4} link={link4} title={title4} />
        <CourseLink style={style5} link={link5} title={title5} />
        <CourseLink style={style6} link={link6} title={title6} />
    </div>
}