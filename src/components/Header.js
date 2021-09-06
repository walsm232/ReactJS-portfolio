import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1> Michael Walsh </h1>
                <Typed 
                    className="typed-text"
                    strings={["Software Engineer", "Dublin, Ireland"]}
                    typeSpeed={100}
                    backSpeed={30}
                    loop
                />
                <a href="#"><button type="button" className="btn btn-main-offer btn-secondary"> Contact Me </button></a>
            </div>
        </div>
    )
}

export default Header
