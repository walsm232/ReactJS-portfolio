import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faAws, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1 className="py-5"> Skills </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="icon" icon={faReact} size="3x"/> </div>
                                <h3> Frontend Development </h3>
                                <p> React, HTML, CSS, Javascript, Bootstrap, and jQuery </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="icon" icon={faPython} size="3x"/> </div>
                                <h3> Backend Development and Scripting </h3>
                                <p> Python, Java, Bash, Django, and Flask </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="icon" icon={faLaptopCode} size="3x"/> </div>
                                <h3> Testing and Automation </h3>
                                <p> Pytest, Pytest-BDD, Selenium, Locust, Chaos Toolkit, SoapUI, and Postman </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="icon" icon={faAws} size="3x"/> </div>
                                <h3> Public Cloud Services </h3>
                                <p> Amazon Web Services (AWS) and Google Cloud Platform (GCP) </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="icon" icon={faDatabase} size="3x"/> </div>
                                <h3> Databases and Storage </h3>
                                <p> MySQL, SQL Server, NoSQL (MongoDB), and SQLite  </p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-4 col-sm-6">
                            <div className="box">
                                <div className="circle"> <FontAwesomeIcon className="icon" icon={faDocker} size="3x"/> </div>
                                <h3> CI/CD, DevTools, and Observability </h3>
                                <p> Kubernetes, Docker, Jenkins, Bamboo, Helm, ArgoCD, Grafana, Prometheus, and Git </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Skills
