import React from 'react';
import Header from '../../Components/templates/Header/Header';
import Course from '../../Components/templates/Course/Course';

function HtmlAndCSS() {
    return (
        <div className='HtmlAndCSS'>
            <Header />
            <Course mainTitle="Html and CSS Course"
                titleLeft="Html and CSS"
                titleRight="Html Introduction"
                style1={{
                    backgroundColor: "#ecf0f1"
                }}
                title1="Html Home" title2="Html & CSS Introduction" title3="HTML Basic" title4="HTML Heading" title5="HTML Paragraph" title6="CSS Introduction"
                link1="/Html and CSS Course"
                textBtn1="Home" textBtn2="Next" />
        </div>
    );
}

export default HtmlAndCSS;