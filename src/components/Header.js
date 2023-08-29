import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1> Michael Walsh </h1>
                <Typed 
                    className="typed-text"
                    strings={["Software Engineer", "Dublin, Ireland"]}
                    typeSpeed={100}
                    backSpeed={30}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
