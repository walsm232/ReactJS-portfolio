import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

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
                <Link smooth={true} to="contact"><button type="button" className="btn btn-main-offer btn-secondary"> Contact Me</button> </Link>
            </div>
        </div>
    )
}

export default Header
