
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "emailjs-com";
import React, {useState} from 'react';



export const Contact = () => {


    const [buttonText, setButtonText] = useState('Send');

    function sendEmail(e) {
        e.preventDefault();
        setButtonText('Sending...');

        emailjs.sendForm('service_dch7b1u', 'template_95qs7pu', e.target, '-SIGKYyj5bPnIR_4W').then(res => {
            console.log(res);
            setButtonText('Sent');
            e.target.reset(); // Reset the form fields
        }).catch(err => {
            console.log(err);
            setButtonText('Failed'); 
          });
    }


    return (

        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn __faster" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                {/* <label>name</label> */}
                                                <input type="text" name="name" placeholder="Full Name" />
                                            </Col>

                                            <Col size={12} sm={6} className="px-1">
                                                {/* <label>Email</label> */}
                                                <input type="email" name="user_email" placeholder="Email Address" />
                                            </Col>

                                            <Col size={12} className="px-1">
                                                {/* <label>Message</label> */}
                                                <textarea rows="6" name="message" placeholder="Message"></textarea>
                                                <button type="submit" value="Send"><span>{buttonText}</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}