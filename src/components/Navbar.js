import React from "react";
import logo from "../logo.gif";
import {Link} from "react-scroll";

/* React FontAwesome Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faMedium, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand"><img className="logo" src={logo} alt="Michael Walsh Portfolio Logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars } style={{ color: "#FFF" }}/>
                </button>
                <div className="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto text-md-center text-left">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" aria-current="page"> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" offset={-80} className="nav-link" aria-current="page"> About Me </Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="skills" offset={-80} className="nav-link"> Skills </Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" offset={-60} className="nav-link"> Experience </Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" className="nav-link"> Contact </Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
                        <div className="brand-icons">
                            <a href="https://github.com/walsm232/"><FontAwesomeIcon icon={ faGithub } size="2x" style={{ color: "#FFF" }}/></a> <span class="ms-2"></span> 
                            <a href="https://www.linkedin.com/in/michael-walsh-it/"><FontAwesomeIcon icon={ faLinkedin } size="2x" style={{ color: "#FFF" }}/></a> <span class="ms-2"></span> 
                            <a href="https://michaelwalshh.medium.com/"><FontAwesomeIcon icon={ faMedium } size="2x" style={{ color: "#FFF" }}/></a> <span class="ms-2"></span> 
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
