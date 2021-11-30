import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_gmail', 'template_y9d5syl', e.target, 'user_tIR23nyqQiE3Cf53cwTkt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container my-4 bg-primary bg-transparent" >
                <h2>Contact Me</h2>
            <form onSubmit={sendEmail}>
                    <div className="row pt-3 mx-auto">
                        <div className="col-12 col-md-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-12 col-md-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-12 col-md-8 form-group pt-2 mx-auto">
                            <input type="number" className="form-control" placeholder="Number" name="number"/>
                        </div>
                        <div className="col-12 col-md-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-12 col-md-8 pt-3 mx-auto">
                            <input type="submit" className="myBtn" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;