import '../App.css';
import Menu from './Menu';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import about from '../image/about-bg.png';
import about1 from '../image/gotrip.png';
import about2 from '../image/team1.png';
import about3 from '../image/team2.png';
import about4 from '../image/team3.png';
import about5 from '../image/team4.png';
import about6 from '../image/team5.png';
import Choose from './Choose';
import Travel from './Travel';
import Count from './Count';
import Footer from './Footer';
import { FaRegNewspaper } from "react-icons/fa";
import { FaArrowLeftLong,FaArrowRightLong  } from "react-icons/fa6";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const option4={
    responsive:{
        1:{
            nav:false,
            items:1,
        },
        576:{
            items:2,
            center:false,
        },
        768:{
            items:3,
        },
        992:{
            items:4,
            center:false,
        },
        1400:{
            items:5,
        },
    }
}

function Page_about() {
    return (
        <>
            <Menu></Menu>

            {/* About Slider Start */}
            <div className='about-slider'>
                <img src={about}></img>

                <div className='about-slider-content text-center w-100'>
                    <h2>Looking for joy?</h2>
                    <p>Your trusted trip companion</p>
                </div>
            </div>
            {/* About Slider End */}

            <Choose></Choose>

            {/* Gotrip start */}
            <Container>
                <div className='spacery gotrip'>
                    <Row>
                        <Col className='m-auto py-3' xs={12} lg={6}>
                            <div className='gotrip-content'>
                                <h2>About GoTrip.com</h2>
                                <h5>These popular destinations have a lot to offer</h5>
                                <p>London is a shining example of a metropolis at the highest peak of modernity and boasts an economy and cultural diversity that's the envy of other global superpowers.</p>
                                <p>Take the opportunity to acquaint yourself with its fascinating history chronicled by institutions like the British Museum as well as see how far it has come by simply riding the Tube and passing by celebrated landmarks like Buckingham Palace, Westminster Abbey, and marvels like Big Ben, the London Eye, and the Tower Bridge.</p>
                            </div>
                        </Col>
                        <Col className='py-3' xs={12} lg={6}><img src={about1}></img></Col>
                    </Row>
                </div>
            </Container>
            {/* Gotrip end */}

            <Count></Count>

            {/* Our Team Start */}
            <Container>
                <div className='spacery'>

                    <div className='heading text-start'>
                        <h2>Our Team</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>

                    <OwlCarousel className='owl-theme team-slider' loop margin={20} nav={true} dots={true} items={5} center={true} {...option4}>
                        <div class='item'>
                            <img src={about2}></img>
                            <div className='team-content'>
                                <h3>Theresa Williamson</h3>
                                <p>Web Designer </p>
                            </div>
                        </div>
                        <div class='item'>
                            <img src={about3}></img>
                            <div className='team-content'>
                                <h3>Cody Fisher</h3>
                                <p>Medical Assistant</p>
                            </div>
                        </div>
                        <div class='item'>
                            <img src={about4}></img>
                            <div className='team-content'>
                                <h3>Dianne Russell</h3>
                                <p>Web Designer </p>
                            </div>
                        </div>
                        <div class='item'>
                            <img src={about5}></img>
                            <div className='team-content'>
                                <h3>Jerome Bell</h3>
                                <p>Marketing Coordinator </p>
                            </div>
                        </div>
                        <div class='item'>
                            <img src={about6}></img>
                            <div className='team-content'>
                                <h3>Theresa Webb</h3>
                                <p>Nursing Assistant</p>
                            </div>
                        </div>
                        <div class='item'>
                            <img src={about2}></img>
                            <div className='team-content'>
                                <h3>Cameron Williamson</h3>
                                <p>Dog Trainer</p>
                            </div>
                        </div>
                        <div class='item'>
                            <img src={about3}></img>
                            <div className='team-content'>
                                <h3>Courtney Henry</h3>
                                <p>Medical Assistant</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </Container>
            {/* Our Team End */}

            <Travel></Travel>

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

export default Page_about;