import Menu from "./Menu";
import Footer from "./Footer";
import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import contact from '../image/map1.jpg';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegNewspaper,FaFacebookF,FaLinkedinIn ,FaInstagram,FaTwitter } from "react-icons/fa";

import Choose from "./Choose";

function Contact() {
    return (
        <>
            <Menu></Menu>

            {/* First Line Start */}
            <Container>
                <Row className='first-line'>
                    <Col xs={12} md={6} className=' py-2'>
                        <Row>
                            <Col xs="auto">Europe</Col>
                            <Col xs="auto">-</Col>
                            <Col xs="auto">United Kingdom (UK)</Col>
                            <Col xs="auto">-</Col>
                            <Col xs="auto">London</Col>
                        </Row>
                    </Col>
                    <Col className='text-md-end py-2' xs={12} md={6}>London Tourism: Best of London</Col>
                </Row>
            </Container>
            {/* First Line End */}

            {/* Map Start */}
            <div className="map">
                <div className="map-img">
                    <iframe id="iframeid"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                    ></iframe>


                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <div className="contact-form">
                                <h3>Send a message</h3>
                                <input type="text" placeholder="Full Name"></input><br></br>
                                <input type="text" placeholder="Email"></input><br></br>
                                <input type="text" placeholder="Subject"></input><br></br>
                                <input type="text" placeholder="Your Message"></input><br></br>
                                <button className="contact-btn"><a href="">Send Message <FaArrowTrendUp></FaArrowTrendUp></a></button>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
            {/* Map End */}

            {/* Contact Us start */}
            <Container>
                <div className="spacery contact-us-content">
                    <h2>Contact Us</h2>

                    <Row className="justify-content-between">
                        <Col xs={12} sm={12} md={12} lg={12} xl="3" className="py-3">
                            <h5>Address</h5>
                            <p>328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl="auto" className="py-3">
                            <h5>Toll Free Customer Care</h5>
                            <p>+47 333 78 901</p>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4} xl="auto" className="py-3">
                            <h5>Need live support?</h5>
                            <p>hi@gotrip.com</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4} xl="auto" className="py-3">
                            <h5>Follow us on social media</h5>
                            <FaFacebookF className="contact-us-icon"></FaFacebookF>
                            <FaTwitter className="contact-us-icon"></FaTwitter>
                            <FaInstagram className="contact-us-icon"></FaInstagram>
                            <FaLinkedinIn className="contact-us-icon"></FaLinkedinIn>

                        </Col>
                    </Row>
                </div>
            </Container>
            {/* Contact Us End */}

            <div className="choose-contact">
                <Choose></Choose>
            </div>

            {/* Sign Start */}
            <div className='signs spacery'>
                <Container>
                    <Row className='align-items-center'>
                        <Col className='d-flex align-items-center justify-content-xl-center py-3' xs={12} xl={6}>
                            <FaRegNewspaper className='signs-letter'></FaRegNewspaper>
                            <div className='signs-part'>
                                <h2>Your Travel Journey Starts Here</h2>
                                <p>Sign up and we'll send the best deals to you</p>
                            </div>
                        </Col>
                        <Col xs={12} xl={6} className='py-3'>
                            <div className='form-signs text-xl-center'>
                                <input type='text' placeholder='Your Email'></input>
                                <button className='signs-btn'><a href=''>Subsrcibe</a></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Sign End */}

            <Footer></Footer>
        </>
    )
}

export default Contact;