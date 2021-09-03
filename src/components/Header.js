import React from "react";
import Typed from "react-typed"
import headshot from "../headshot.png";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <img className="headshot" src={headshot} alt="Michael Walsh Headshot Image"/>
                <h1>Michael Walsh</h1>
                <Typed 
                    className="typed-text"
                    strings={["Software Engineer"]}
                    typeSpeed={100}
                />
                <a href="#"><button type="button" className="btn btn-main-offer btn-secondary">Contact Me</button></a>
            </div>
        </div>
    )
}

export default Header
