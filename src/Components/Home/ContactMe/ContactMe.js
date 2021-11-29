import React from 'react';
import emailjs from "emailjs-com";
const ContactMe = () => {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_22o99tq', 'template_wsfwqf1', e.target, 'user_kWODbhw6do5bcNb3go0Ah')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div>
            <h2 className="text-center mt-5">Contact Me</h2>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message" required></input>
                        </div>
                    </div>
                </form>
                </div>
        </div>
    );
};

export default ContactMe;