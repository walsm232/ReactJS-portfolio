import React from "react";
import KCNACertification from "../static/experience/kcna-certification.png";
import ACECertification from "../static/experience/ace-certification.png";
import CCPCertification from "../static/experience/ccp-certification.png";
import KubernetesMeetup from "../static/experience/kubernetes-meetup.png";

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
                        <p> 📚 I began studying a Bachelor of Science degree (Level 8) in Enterprise Computing at Dublin City University. This was a 4 year degree which included a fantastic balance of both business and technical modules. This enabled me to develop a unique blend of technical aptitude, business savvy, and interpersonal skills. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> January 2020 - September 2020 </h3>
                        <p> 👨‍💻 I completed an 8 month Quality Assurance Engineer internship at Irish Life in Dublin. I worked on a number of different test initiatives in the QA department such as API testing with SoapUI, unit testing, and test automation with Selenium. I received excellent feedback from my manager on completion of this placement. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> May 2021 </h3>
                        <p> 👨‍🎓 I finished my undergraduate degree in Enterprise Computing and graduated from Dublin City University with a First Class Honours (1.1) grade. I also managed to rank 3rd overall in my class for my results. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> June 2020 - August 2021 </h3>
                        <p> 👨‍💻 I completed a 3 month Project Management internship at Guidewire Software in Dublin. I had the opportunity to work on a number of different BizTech initiatives and received outstanding feedback on completion of my internship from my manager. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> September 2021 </h3>
                        <p> 👨‍💻 I started a new position at Workday as an Associate (P1) Software Development Engineer (SDE) as part of the Continuous Systems Verification team. This falls under the Platform and Cloud Engineering organization. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> October 2021 </h3>
                        <p> 📄 I passed the Amazon Web Services (AWS) Cloud Practitioner exam and got certified. </p>
                        <img className="timeline-image" src={CCPCertification} alt="Amazon Web Services (AWS) Cloud Practitioner Certification"/>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> February 2022 </h3>
                        <p> 📄 I passed the Google Cloud Platform (GCP) Associate Cloud Engineer exam and got certified. </p>
                        <img className="timeline-image" src={ACECertification} alt="Google Cloud Platform (GCP) Associate Cloud Engineer (ACE) Certification"/>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> April 2022 </h3>
                        <p> 🗣️ I gave a presentation on the Google Cloud Platform (GCP) Associate Cloud Engineer certification at Workday's yearly internal tech conference. 150 Workday employees attended my talk which discussed areas such as GCP product and service offerings, study materials, exam tips, and cloud certification communities. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> September 2022 </h3>
                        <p> 📚 I began studying a Postgraduate Diploma (Level 9) in Cloud Computing and Software Development at University of Galway. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> October 2022 </h3>
                        <p> 📈 I was promoted to Sr. Associate (P2) Software Development Engineer at Workday. </p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> February 2023 </h3>
                        <p> 📄 I passed the Kubernetes and Cloud Native Associate (KCNA) certification and got certified. </p>
                        <img className="timeline-image" src={KCNACertification} alt="Kubernetes and Cloud Native Associate (KCNA) Certification"/>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> April 2023 </h3>
                        <p> 🎯 I became co-organizer of the Dublin Kubernetes Meetup group which is built around a community of 500 members. We held our first event of 2023 at the Workday Dublin office which was a huge success with 100+ attendees. </p>
                        <img className="timeline-image" src={KubernetesMeetup} alt="Dublin Kubernetes 1st Meetup of 2023"/>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> TBD... </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
