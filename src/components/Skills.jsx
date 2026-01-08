import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faAws, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLaptopCode, faTerminal } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h1 className="py-5"> Skills </h1>
            <div className="container">
                <div className="row">
                    {/* Cloud Platforms */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faAws} size="3x" /></div>
                            <h3> Cloud Platforms </h3>
                            <p> Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure </p>
                        </div>
                    </div>

                    {/* Containers & Orchestration */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDocker} size="3x" /></div>
                            <h3> Containers & Orchestration </h3>
                            <p> Docker, Kubernetes, Helm, ArgoCD, Argo Workflows, Argo Events </p>
                        </div>
                    </div>

                    {/* Programming & Scripting */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faTerminal} size="3x" /></div>
                            <h3> Programming & Scripting </h3>
                            <p> Go (Golang), Python, Java, Bash, SQL, Spring Boot </p>
                        </div>
                    </div>

                    {/* DevOps & CI/CD */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="3x" /></div>
                            <h3> DevOps & CI/CD </h3>
                            <p> Buildkite, Jenkins, Terraform, Renovate, Git, Linux </p>
                        </div>
                    </div>

                    {/* Observability & Developer Tools */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="3x" /></div>
                            <h3> Observability & Developer Experience </h3>
                            <p> Grafana, Prometheus, Elastic Stack, Backstage </p>
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="3x" /></div>
                            <h3> Databases </h3>
                            <p> MySQL, MongoDB, Redis </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills
