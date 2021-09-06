import React from "react";

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1> Experience </h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> September 2017 </h3>
                        <p> I began studying a Bachelor of Science degree in Enterprise Computing at Dublin City University. This was a 4 year degree which included a fantastic balance of both business and technical modules. This enabled me to develop a unique blend of technical aptitude, business savvy, and interpersonal skills. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> January 2020 - September 2020 </h3>
                        <p> I completed an 8 month Quality Assurance Test internship at Irish Life in Dublin. I had the opportunity to refactor automated test scripts with Selenium WebDriver which were written in C#. I also got to work on performing API and performance tests on a new customer service desktop application. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> May 2021 </h3>
                        <p> I finished my undergraduate degree in Enterprise Computing and graduated from Dublin City University with a First Class Honours (1.1) grade. I also managed to rank 3rd overall in my class for my results. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> June 2020 - August 2021 </h3>
                        <p> I completed a 3 month Project Management internship at Guidewire Software in Dublin. I got to solely complete the migration of project budget requesting and financial forecasting from Excel to Smartsheet. This helped achieve the department goal of 85%+ monthly budget accuracy and 95%+ quarterly budget accuracy. I also assisted with the management of a number of projects at different stages of the development lifecycle. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> September 2021 </h3>
                        <p> I am starting a new position at Workday as an Associate Software Development Engineer in Test (SDET). </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
