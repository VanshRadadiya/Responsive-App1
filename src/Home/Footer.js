import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import { FaCaretDown, FaRegUserCircle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRegHeart, FaStar, FaApple, FaGooglePlay, FaGlobeAsia } from 'react-icons/fa';
import React from 'react';
function Footer() {
    return (
        <>
            <Container>
                <footer>
                    <Row className='footer'>
                        <Col className='footer-p1 py-5' xs={12} sm={6} lg={4} xl>
                            <h5>Contact Us</h5>
                            <p>Toll Free Customer Care</p>
                            <h6>+(1) 123 456 7890</h6>
                            <span>Need live support?</span><br></br>
                            <h3>hi@gotrip.com</h3>
                        </Col>
                        <Col xs={12} sm={6} lg={4} xl className='py-5'>
                            <h5>Company</h5>
                            <ul>
                                <li><a href=''>About Us</a></li>
                                <li><a href=''>Careers</a></li>
                                <li><a href=''>Blog</a></li>
                                <li><a href=''>Press</a></li>
                                <li><a href=''>Gift Cards</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} lg={4} xl className='py-5'>
                            <h5>Support</h5>
                            <ul>
                                <li><a href=''>Contact</a></li>
                                <li><a href=''>Legal Notice</a></li>
                                <li><a href=''>Privacy Policy</a></li>
                                <li><a href=''>Terms and Conditions</a></li>
                                <li><a href=''>Sitemap</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} lg={4} xl className='py-5'>
                            <h5>Other Services</h5>
                            <ul>
                                <li><a href=''>Car hire</a></li>
                                <li><a href=''>Activity Finder</a></li>
                                <li><a href=''>Tour List</a></li>
                                <li><a href=''>Flight finder</a></li>
                                <li><a href=''>Cruise Ticket</a></li>
                                <li><a href=''>Holiday Rental</a></li>
                                <li><a href=''>Travel Agents</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} lg={4} xl className='py-5'>
                            <h5>Mobile</h5>
                            <ul className='d-flex mobile align-items-center'>
                                <li><FaApple className='mbl-icon'></FaApple></li>
                                <li>Download in the<br></br><span>Apple Store</span></li>
                            </ul>

                            <ul className='d-flex mobile align-items-center'>
                                <li><FaGooglePlay className='mbl-icon'></FaGooglePlay></li>
                                <li>Get in on<br></br><span>Google Play</span></li>
                            </ul>
                        </Col>
                    </Row>
                </footer>

                <hr></hr>

                <Row className='copyright'>
                    <Col xs={12} md={6} xxl className='py-2'>
                        <p className='d-flex copyright-1'>@ 2023 by <a href=''>ib-themes</a> All rights reserved.</p>
                    </Col>
                    <Col xs={12} md={6} xxl className='py-2'>
                        <ul className='d-flex policy justify-content-xxl-center'>
                            <li><a href=''>Privacy</a></li>
                            <li><a href=''>Terms</a></li>
                            <li><a href=''>Sitemap</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} xxl className='py-2'>
                        <ul className='d-flex align-items-center justify-content-xxl-end'>
                            <li className='me-3'><a><FaGlobeAsia></FaGlobeAsia> <u className='ps-1'>English(US)</u> <span className='px-2'>$</span> <u>USD</u></a></li>
                            <FaFacebookF className='copyright-icon'></FaFacebookF>
                            <FaTwitter className='copyright-icon'></FaTwitter>
                            <FaInstagram className='copyright-icon'></FaInstagram>
                            <FaLinkedinIn className='copyright-icon'></FaLinkedinIn>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;