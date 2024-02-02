import '../App.css';
import Menu from './Menu';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import { FaRegPlayCircle, FaPlus, FaMinus, FaRegNewspaper } from "react-icons/fa";
import expert from '../image/about-bg.png';
import expert1 from '../image/work1.svg';
import expert2 from '../image/work2.svg';
import expert3 from '../image/work3.svg';
import expert4 from '../image/work4.svg';
import expert5 from '../image/work5.svg';
import expert6 from '../image/local.png';
import expert7 from '../image/local1.svg';
import expert8 from '../image/local2.svg';
import expert9 from '../image/local3.svg';
import Footer from './Footer';


function Page_Expert() {
    return (
        <>
            <Menu></Menu>

            {/* About Slider Start */}
            <div className='expert-slider'>
                <img src={expert}></img>

                <div className='expert-slider-content text-center'>
                    <h2>Let's Show the Beauty of Your City to the World</h2>
                    <p>Discover amzaing places at exclusive deals</p>
                    <button className='expert-btn'><a href=''>Register</a></button>
                </div>
            </div>
            {/* About Slider End */}

            {/* Work Start */}
            <Container>
                <div className='spacery'>
                    <div className='heading text-center'>
                        <h2>How does it work?</h2>
                        <p>These popular destinations have a lot to offer</p>
                    </div>

                    <Row className='work-content align-items-center mt-5'>
                        <Col className='text-center py-5' xs={12} md={6} lg={4} xl>
                            <div className='work-img m-auto'>
                                <img src={expert1}></img>
                                <div className='no'><p>01</p></div>
                            </div>
                            <h5>Sign Up</h5>
                        </Col>
                        <Col className='text-center m-auto d-sm-none d-xl-block work-arrow' xl>
                            <img src={expert2}></img>
                        </Col>
                        <Col className='text-center py-5 m-auto' xs={12} md={6} lg={4} xl>
                            <div className='work-img m-auto'>
                                <img src={expert3}></img>
                                <div className='no'><p>02</p></div>
                            </div>
                            <h5>Add your services</h5>
                        </Col>
                        <Col className='text-center m-auto d-sm-none d-xl-block work-arrow' xl>
                            <img src={expert4}></img>
                        </Col>
                        <Col className='text-center py-5' xs={12} md={6} lg={4} xl>
                            <div className='work-img m-auto'>
                                <img src={expert5}></img>
                                <div className='no'><p>03</p></div>
                            </div>
                            <h5>Get bookings</h5>
                        </Col>
                    </Row>
                </div>
            </Container>
            {/* Work End */}

            {/* Local Expert Start */}
            <div>
                <Row className='local-expert'>
                    <Col xs={12} lg={7}>
                        <div className='local-p1 spacery'>
                            <div className='heading text-start pt-5'>
                                <h2>Why be a Local Expert</h2>
                                <p>These popular destinations have a lot to offer</p>
                            </div>

                            <div className='d-flex local-img-icon'>
                                <img src={expert7}></img>
                                <div className='local-content'>
                                    <h5>Best Price Guarantee</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                            <div className='d-flex local-img-icon'>
                                <img src={expert8}></img>
                                <div className='local-content'>
                                    <h5>Easy & Quick Booking</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>

                            <div className='d-flex local-img-icon'>
                                <img src={expert9}></img>
                                <div className='local-content'>
                                    <h5>Customer Care 24/7</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={5} className='order-first order-lg-last'>
                        <div className='local-img'>
                            <img src={expert6}></img>
                            <p><FaRegPlayCircle className='local-icon'></FaRegPlayCircle>Watch Video</p>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Local Expert End */}

            {/* Frequently Start */}
            <Container>
                <div className='spacery frequent'>
                    <div className='heading text-center mb-5'>
                        <h2>Frequently Asked Questions</h2>
                        <p>Interdum et malesuada fames</p>
                    </div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <div className='frequent-icon1'>
                                    <FaPlus></FaPlus>
                                </div>

                                <h5 className='text-accordian'>
                                    What do I need to hire a car?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='accordian-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <div className='frequent-icon1'>
                                    <FaPlus></FaPlus>
                                </div>
                                <h5 className='text-accordian'>
                                    How old do I have to be to rent a car?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='accordian-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </Accordion.Body>
                        </Accordion.Item>



                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <div className='frequent-icon1'>
                                    <FaPlus></FaPlus>
                                </div>

                                <h5 className='text-accordian'>                             Can I book a hire car for someone else?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='accordian-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </Accordion.Body>
                        </Accordion.Item>



                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <div className='frequent-icon1'>
                                    <FaPlus></FaPlus>
                                </div>

                                <h5 className='text-accordian'>
                                    How do I find the cheapest car hire deal?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='accordian-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </Accordion.Body>
                        </Accordion.Item>



                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <div className='frequent-icon1'>
                                    <FaPlus></FaPlus>
                                </div>

                                <h5 className='text-accordian'>
                                    What should I look for when I'm choosing a car?</h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p className='accordian-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>


                </div>
            </Container>
            {/* Frequently End */}

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

export default Page_Expert;