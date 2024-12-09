import React from "react";
import "./Course.css";
import CourseTitle from "../../atoms/CourseTitle/CourseTitle";
import BannerCourseContainerLeft from "../../organisms/BannerCourseContainerLeft/BannerCourseContainerLeft";
import BannerCourseContainerRight from "../../organisms/BannerCourseContainerRight/BannerCourseContainerRight";

export default function Course({ mainTitle, titleLeft, titleRight, textBtn1, textBtn2,
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
    return <div className="course">
        <div className="courseCotainerMiddle">
            <CourseTitle title={mainTitle} />
            <div className="courseBoxContainer">
                <BannerCourseContainerLeft title={titleLeft}
                    style1={style1} style2={style2} style3={style3} style4={style4} style5={style5} style6={style6}
                    link1={link1} link2={link2} link3={link3} link4={link4} link5={link5} link6={link6}
                    title1={title1} title2={title2} title3={title3} title4={title4} title5={title5} title6={title6} />
                <BannerCourseContainerRight title={titleRight} textBtn1={textBtn1} textBtn2={textBtn2} />
            </div>
        </div>
    </div>

}