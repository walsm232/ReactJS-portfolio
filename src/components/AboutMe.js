import React from "react";
import Headshot from "../headshot.png";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Headshot} alt="Michael Walsh Headshot Image"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutme-heading"> About Me </h1>
                    <p> 
                        Hello! I am Michael. I have been passionate about technology from a young age, having started writing code from the age of 13 after attending my first CoderDojo class in Waterford, Ireland.
                        <hr/>
                        I am aiming to become a Full Stack Developer with the hopes of gaining experience as a Front-end Developer, Backend Developer, and a Tester. I received a First Class Honours (1.1) grade in my Bachelor of Science degree in Enterprise Computing from Dublin City University, ranking 3rd in my class.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe