import React from "react";
import "./BannerCourseContainerRight.css";
import CourseTitle from "../../atoms/CourseTitle/CourseTitle";
import CourseNextBtnContainer from "../../molecules/CourseNextBtnContainer/CourseNextBtnContainer";

export default function BannerCourseContainerRight({ title, textBtn1, textBtn2 }) {
    return <div className="bannerCourseContainerRight">
        <CourseTitle style={{
            marginBottom: "20px"
        }} title={title} />
        <CourseNextBtnContainer textBtn1={textBtn1} textBtn2={textBtn2} />
    </div>
}