import React from "react";
import Headshot from "../headshot.png";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Headshot} alt="Michael Walsh Headshot Image"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutme-heading"> About Me </h1>
                    <p> 
                        Hello! I am Michael. I'm a 22 year old Software Engineer based in Ireland. I have been passionate about technology from a young age, having first started writing code from the age of 13 after attending a CoderDojo class in Waterford, Ireland.
                        <hr/>
                        I am aiming to become a well-rounded engineer with the hopes of gaining experience in technical roles. I received a First Class Honours (1.1) grade in my Bachelor of Science degree in Enterprise Computing from Dublin City University, ranking 3rd in my class.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe