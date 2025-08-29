import React from "react";
import DCULogo from "../static/experience/dcu.png";
import UniversityOfGalwayLogo from "../static/experience/university-of-galway.png";
import IrishLifeLogo from "../static/experience/irish-life.png";
import GuidewireSoftwareLogo from "../static/experience/guidewire.png";
import AWSLogo from "../static/experience/aws.png";
import GoogleCloudPlatformLogo from "../static/experience/google-cloud-platform.png";
import WorkdayLogo from "../static/experience/workday.png";
import ElasticLogo from "../static/experience/elastic.png";
import KubernetesLogo from "../static/experience/kubernetes.png";
import CNCFLogo from "../static/experience/cncf.png";

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1> Experience </h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> September 2017 </h3>
                        <div className="event">
                            <img 
                                src={DCULogo}
                                alt="Dublin City University (DCU) Logo" 
                                className="event-logo"
                            />
                            <p> I began studying a Bachelor of Science degree (Level 8) in Enterprise Computing at Dublin City University. This was a 4 year degree which included a blend of both business and technical modules. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> January 2020 - September 2020 </h3>
                        <div className="event">
                            <img 
                                src={IrishLifeLogo}
                                alt="Irish Life Logo" 
                                className="event-logo"
                            />
                            <p> I completed an 8 month Quality Assurance Engineer internship at Irish Life in Dublin. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> May 2021 </h3>
                        <div className="event">
                            <img 
                                src={DCULogo}
                                alt="Dublin City University (DCU) Logo" 
                                className="event-logo"
                            />
                            <p> I finished my undergraduate degree in Enterprise Computing and graduated from Dublin City University with a First Class Honours (1.1) grade. I also managed to rank 3rd overall in my class for my results. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> June 2020 - August 2021 </h3>
                        <div className="event">
                            <img 
                                src={GuidewireSoftwareLogo}
                                alt="Guidewire Software Logo" 
                                className="event-logo"
                            />
                            <p> I completed a 3 month Project Management internship at Guidewire Software in Dublin. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> September 2021 </h3>
                        <div className="event">
                            <img 
                                src={WorkdayLogo}
                                alt="Workday Logo" 
                                className="event-logo"
                            />
                            <p> I started a new position at Workday as an Associate Software Development Engineer (SDE) under the Platform and Cloud Engineering organization. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> October 2021 </h3>
                        <div className="event">
                            <img 
                                src={AWSLogo}
                                alt="Amazon Web Services (AWS) Logo" 
                                className="event-logo"
                            />
                            <p> I passed the Amazon Web Services (AWS) Cloud Practitioner exam and got certified <a href="https://www.credly.com/badges/1df11e8f-763e-4e07-8cd9-32a3ab642436">[Certificate]</a>. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> February 2022 </h3>
                        <div className="event">
                            <img 
                                src={GoogleCloudPlatformLogo}
                                alt="Google Cloud Platform (GCP) Logo" 
                                className="event-logo"
                            />
                            <p> I passed the Google Cloud Platform (GCP) Associate Cloud Engineer exam and got certified <a href="https://www.credential.net/61d135ac-0e62-4f02-bb15-b11b1708e94a">[Certificate]</a>. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> September 2022 </h3>
                        <div className="event">
                            <img 
                                src={UniversityOfGalwayLogo}
                                alt="University of Galway Logo" 
                                className="event-logo"
                            />
                            <p> I began studying a Postgraduate Diploma (Level 9) in Cloud Computing and Software Development at University of Galway. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> October 2022 </h3>
                        <div className="event">
                            <img 
                                src={WorkdayLogo}
                                alt="Workday Logo" 
                                className="event-logo"
                            />
                            <p> I was promoted to Sr. Associate Software Development Engineer at Workday. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> February 2023 </h3>
                        <div className="event">
                            <img 
                                src={CNCFLogo}
                                alt="Cloud Native Computing Foundation (CNCF) Logo" 
                                className="event-logo"
                            />
                            <p> I passed the Kubernetes and Cloud Native Associate (KCNA) certification and got certified <a href="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/abc05936-004e-42fb-a5ed-081418ab2982-michael-walsh-f36f4d75-2885-4907-ae53-31ee4b955e83-certificate.pdf">[Certificate]</a>. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> April 2023 </h3>
                        <div className="event">
                            <img 
                                src={KubernetesLogo}
                                alt="Kubernetes Logo" 
                                className="event-logo"
                            />
                            <p> I became Co-Founder and Community Lead of the <a href="https://www.meetup.com/dublin-kubernetes-meetup/">Kubernetes Dublin Meetup</a> and grew the community to over 900 members. We held our first event of 2023 at the Workday Dublin office which was a huge success with 100+ attendees. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> October 2023 </h3>
                        <div className="event">
                            <img 
                                src={WorkdayLogo}
                                alt="Workday Logo" 
                                className="event-logo"
                            />
                            <p> I was promoted to Software Development Engineer (Mid-Level) at Workday. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> July 2024 </h3>
                        <div className="event">
                            <img 
                                src={CNCFLogo}
                                alt="Cloud Native Computing Foundation (CNCF) Logo" 
                                className="event-logo"
                            />
                            <p> Our meetup group was accepted by the Cloud Native Computing Foundation (CNCF) and we became the official meetup group for Dublin, rebranding as <a href="https://community.cncf.io/cloud-native-dublin/">Cloud Native Dublin</a>. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> August 2024 </h3>
                        <div className="event">
                            <img 
                                src={UniversityOfGalwayLogo}
                                alt="University of Galway Logo" 
                                className="event-logo"
                            />
                            <p> I finished my Postgraduate Diploma in Cloud Computing and Software Development and graduated from University of Galway with a First Class Honours (1.1) grade. </p>
                        </div>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> June 2025 </h3>
                        <div className="event">
                            <img 
                                src={ElasticLogo}
                                alt="Elastic Logo" 
                                className="event-logo"
                            />
                            <p> I relocated to Málaga in Spain and joined Elastic as a Software Engineer II in the Platform Engineering Productivity organization. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
