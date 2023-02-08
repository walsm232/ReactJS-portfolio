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
                        Hello, I'm Michael! 👋 I am a 23 year old Software Engineer based in Ireland 🇮🇪. I have been passionate about technology from a young age, having first started writing basic code at the age of 14.
                        <hr/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
