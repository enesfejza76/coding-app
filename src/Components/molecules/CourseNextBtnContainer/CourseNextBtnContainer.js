import React from "react";
import "./courseNextBtnContainer.css";
import CourseNextBtn from "../../atoms/CourseNextBtn/CourseNextBtn";

export default function CourseNextBtnContainer({ textBtn1, textBtn2 }) {
    return <div className="courseNextBtnContainer">
        <CourseNextBtn text={textBtn1} />
        <CourseNextBtn text={textBtn2} />
    </div>
}