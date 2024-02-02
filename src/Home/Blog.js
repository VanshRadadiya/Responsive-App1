import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import blog1 from '../image/Blog1.png';
import blog2 from '../image/Blog2.png';
import blog3 from '../image/Blog3.png';
import blog4 from '../image/Blog4.png';
import blog5 from '../image/Blog5.png';
import blog6 from '../image/Blog6.png';
import { FaRegNewspaper } from "react-icons/fa";


function Blog() {
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

            {/* Travel Articles Start */}
            <Container>
                <div className='spacery articles'>
                    <div className='heading text-center'>
                        <h2>Travel Articles</h2>
                        <p>Lorem ipsum is placeholder text commonly used in site.</p>
                        <ul className='d-flex flex-wrap justify-content-center mt-5'>
                            <li><a href='' className='px-3 py-2 mx-2 mt-3'>Art and Culture</a></li>
                            <li><a href='' className='px-3 py-2 mx-2 mt-3'>Beaches</a></li>
                            <li><a href='' className='px-3 py-2 mx-2 mt-3'>Adventure travel</a></li>
                            <li><a href='' className='px-3 py-2 mx-2 mt-3'>Explore</a></li>
                            <li><a href='' className='px-3 py-2 mx-2 mt-3'>Family Holidays</a></li>
                            <li><a href='' className='px-3 py-2 mx-2 mt-3'>Air Travel</a></li>
                            <li><a href='' className='px-3 py-2 mx-2 mt-3'>Food and Drink</a></li>
                        </ul>
                    </div>


                    <Row className='article-p'>
                        <Col xs={12} sm={6} lg={4} className='mt-5'>
                            <div className='article-img'>
                                <img src={blog1}></img>
                            </div>
                            <div className='article-content mt-4'>
                                <h5>10 European ski destinations you should visit this winter</h5>
                                <p>Jan 06, 2023</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4} className='mt-5'>
                            <div className='article-img'>
                                <img src={blog2}></img>
                            </div>
                            <div className='article-content mt-4'>
                                <h5>1Booking travel during Corona: good advice in an uncertain time</h5>
                                <p>April 06, 2022</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4} className='mt-5'>
                            <div className='article-img'>
                                <img src={blog3}></img>
                            </div>
                            <div className='article-content mt-4'>
                                <h5>Where can I go? 5 amazing countries that open right now</h5>
                                <p>Jan 06, 2023</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4} className='mt-5'>
                            <div className='article-img'>
                                <img src={blog4}></img>
                            </div>
                            <div className='article-content mt-4'>
                                <h5>10 European ski destinations you should visit this winter</h5>
                                <p>April 06, 2023</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4} className='mt-5'>
                            <div className='article-img'>
                                <img src={blog5}></img>
                            </div>
                            <div className='article-content mt-4'>
                                <h5>Where can I go? 5 amazing countries that open right now</h5>
                                <p>Jan 06, 2023</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4} className='mt-5'>
                            <div className='article-img'>
                                <img src={blog6}></img>
                            </div>
                            <div className='article-content mt-4'>
                                <h5>10 European ski destinations you should visit this winter</h5>
                                <p>April 06, 2023</p>
                            </div>
                        </Col>
                    </Row>
                    <hr className='mt-5'></hr>

                    <Row className='article-page align-items-center'>
                        <Col>
                            <ul className='d-flex flex-wrap justify-content-center'>
                                <li><a href=''>1</a></li>
                                <li><a href=''>2</a></li>
                                <li><a href=''>3</a></li>
                                <li><a href=''>4</a></li>
                                <li><a href=''>5</a></li>
                                <li><a href=''>...</a></li>
                                <li><a href=''>20</a></li>
                            </ul>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='text-center mt-3 article-line'>1-20 of 300+ properties found</Col>
                    </Row>
                </div>
            </Container>
            {/* Travel Articles End */}

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

export default Blog;

