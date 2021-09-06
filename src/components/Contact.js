import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_5uD5HTTsijzRezC1itpH8";

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <div className="contact">
            <div className="text-center">
                <h1> Contact Me </h1>
                <p> Please fill out the form below to contact me and I will get back to you as soon as possible! </p>
            </div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                />
                                <div className="line"></div>
                            </div>
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number (optional)"
                                name="phone"
                                />
                                <div className="line"></div>
                            </div>
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                />
                                <div className="line"></div>
                            </div>
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* MESSAGE */}
                            <div className="text-center">
                                <textarea
                                id="message"
                                type="text"
                                className="form-control"
                                placeholder="Message"
                                name="message"
                                />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12">
                                <div className="btn btn-warning contact-btn" type="submit"> Send Message </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
