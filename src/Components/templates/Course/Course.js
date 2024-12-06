import React from "react";
import "./Course.css";
import CourseContainer from "../../organisms/CourseContainer/CourseContainer";
import CourseTitle from "../../atoms/CourseTitle/CourseTitle";

export default function Course() {
    return <div className="course">
        <div className="courseCotainerMiddle">
            <CourseTitle title="Html and css Course" />
            <div className="courseBoxContainer">
                <CourseContainer style={{
                    width: "20%"
                }}
                    courseTitle="Html and CSS"
                    styleTitle={{
                        fontSize: "1.7rem"
                    }}
                />
                <CourseContainer style={{
                    width: "80%"
                }}
                    courseTitle="Html Introduction"
                    styleTitle={{
                        fontSize: "1.7rem"
                    }}
                />
            </div>
        </div>
    </div>

}