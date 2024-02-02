import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import { FaCaretDown, FaRegUserCircle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRegHeart, FaStar, FaApple, FaGooglePlay, FaGlobeAsia } from 'react-icons/fa';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img26 from '../image/travel1.png';
import img27 from '../image/travel2.png';
import img28 from '../image/travel3.png';
import img29 from '../image/travel4.png';
import img30 from '../image/travel5.png';
import img31 from '../image/company1.svg';
import img32 from '../image/company2.svg';
import img33 from '../image/company3.svg';
import img34 from '../image/company4.svg';
const option3 = {
    responsive: {
      1: {
        items: 1,
        nav: false,
        dots: true,
      },
      576: {
        items: 1,
        margin: 20,
        nav: false,
      },
  
      767: {
        items: 2,
        margin: 20,
        nav: true,
        dots: false,
      },
  
      992: {
        items: 3,
        margin: 20,
        dots: false,
      },
    }
  }

function Travel() {
    return (
        <>
            <div className='travel'>
                <Container>
                    <div className='spacery'>
                        <div className='heading text-center'>
                            <h2>Overheard from Travelers</h2>
                            <p>These popular destinations have a lot to offer</p>
                        </div>

                        <OwlCarousel className='owl-theme slider4' loop={false} {...option3} nav>
                            <div class='item' className='travel-p'>
                                <div>
                                    <h4>Hotel Equatorial Melaka</h4>
                                    <p>"Our family was traveling via bullet train between cities in
                                        Japan with our luggage - the location for this hotel made that so
                                        easy. Agoda price was fantastic."</p>
                                    <hr></hr>
                                    <ul className='d-flex align-items-center'>
                                        <li><img src={img26}></img></li>
                                        <li className='name'>Annette Black <br></br> <span>UX / UI Designer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class='item' className='travel-p'>
                                <div>
                                    <h4>Hotel Equatorial Melaka</h4>
                                    <p>"Our family was traveling via bullet train between cities in
                                        Japan with our luggage - the location for this hotel made that so
                                        easy. Agoda price was fantastic."</p>
                                    <hr></hr>
                                    <ul className='d-flex align-items-center'>
                                        <li><img src={img27}></img></li>
                                        <li className='name'>Annette Black <br></br> <span>UX / UI Designer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class='item' className='travel-p'>
                                <div>
                                    <h4>Hotel Equatorial Melaka</h4>
                                    <p>"Our family was traveling via bullet train between cities in
                                        Japan with our luggage - the location for this hotel made that so
                                        easy. Agoda price was fantastic."</p>
                                    <hr></hr>
                                    <ul className='d-flex align-items-center'>
                                        <li><img src={img28}></img></li>
                                        <li className='name'>Annette Black <br></br> <span>UX / UI Designer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class='item' className='travel-p'>
                                <div>
                                    <h4>Hotel Equatorial Melaka</h4>
                                    <p>"Our family was traveling via bullet train between cities in
                                        Japan with our luggage - the location for this hotel made that so
                                        easy. Agoda price was fantastic."</p>
                                    <hr></hr>
                                    <ul className='d-flex align-items-center'>
                                        <li><img src={img29}></img></li>
                                        <li className='name'>Annette Black <br></br> <span>UX / UI Designer</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class='item' className='travel-p'>
                                <div>
                                    <h4>Hotel Equatorial Melaka</h4>
                                    <p>"Our family was traveling via bullet train between cities in
                                        Japan with our luggage - the location for this hotel made that so
                                        easy. Agoda price was fantastic."</p>
                                    <hr></hr>
                                    <ul className='d-flex align-items-center'>
                                        <li><img src={img30}></img></li>
                                        <li className='name'>Annette Black <br></br> <span>UX / UI Designer</span></li>
                                    </ul>
                                </div>
                            </div>
                        </OwlCarousel>

                        <Row className='align-items-center company'>
                            <Col className='company-1 py-3' xs={6} xl>
                                <h1>13m+</h1>
                                <p>Happy People</p>
                            </Col>
                            <Col className='company-2 text-end text-md-start py-3' xs={6} xl>
                                <h2>4.88</h2>
                                <h5>Overall rating</h5>
                                <FaStar className='company-star'></FaStar>
                                <FaStar className='company-star'></FaStar>
                                <FaStar className='company-star'></FaStar>
                                <FaStar className='company-star'></FaStar>
                                <FaStar className='company-star'></FaStar>
                            </Col>
                            <Col className='text-center text-md-start  text-xl-end py-3' xs={12} md={3} xl>
                                <img src={img31}></img>
                            </Col>
                            <Col className='text-center text-md-start text-xl-end py-3' xs={12} md={3} xl>
                                <img src={img32}></img>
                            </Col>
                            <Col className='text-center text-md-start  text-xl-end py-3' xs={12} md={3} xl>
                                <img src={img33}></img>
                            </Col>
                            <Col className='text-center text-md-start  text-xl-end py-3' xs={12} md={3} xl>
                                <img src={img34}></img>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Travel;