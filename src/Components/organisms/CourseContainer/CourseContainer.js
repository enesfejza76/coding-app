import React from "react";
import "./CourseContainer.css";
import CourseTitle from "../../atoms/CourseTitle/CourseTitle";
import CourseNextBtnContainer from "../../molecules/CourseNextBtnContainer/CourseNextBtnContainer";

export default function CourseContainer({ style, courseTitle, styleTitle, textBtn1, textBtn2 }) {
    return <div style={style} className="courseContainer">
        <CourseTitle title={courseTitle} style={styleTitle} />
        <CourseNextBtnContainer textBtn1={textBtn1} textBtn2={textBtn2} />
    </div>
}