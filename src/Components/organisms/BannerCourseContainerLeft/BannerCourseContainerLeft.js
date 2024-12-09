import React from "react";
import "./BannerCourseContainerLeft.css"
import CourseTitle from "../../atoms/CourseTitle/CourseTitle";
import CourseLinkContainer from "../../molecules/CourseLinkContainer/CourseLinkContainer";

export default function BannerCourseContainerLeft({
    title,
    style1, style2,
    style3, style4,
    style5, style6,
    link1, title1,
    link2, title2,
    link3, title3,
    link4, title4,
    link5, title5,
    link6, title6
}) {
    return <div className="bannerCourseContainerLeft">
        <CourseTitle style={{
            marginBottom: "20px"
        }} title={title} />
        <CourseLinkContainer style1={style1} style2={style2} style3={style3} style4={style4} style5={style5} style6={style6} link1={link1} link2={link2} link3={link3} link4={link4} link5={link5} link6={link6} title1={title1} title2={title2} title3={title3} title4={title4} title5={title5} title6={title6} />
    </div>
}