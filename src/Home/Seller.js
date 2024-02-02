import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import { FaCaretDown, FaRegUserCircle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRegHeart, FaStar, FaApple, FaGooglePlay, FaGlobeAsia } from 'react-icons/fa';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img22 from '../image/best1.png';
import img23 from '../image/best2.png';
import img24 from '../image/best3.png';
import img25 from '../image/best4.png';
const option2 = {
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true
      },
      576: {
        items: 2,
        margin: 20,
        nav: false,
      },
  
      992: {
        items: 3,
        margin: 20,
        dots: false,
      },
      1201: {
        items: 4,
        margin: 20,
        dots: false,
      },
    }
  }
function Seller() {
    return (
        <>
            <Container>
                <div className="spacery">
                    <div className='seller'>
                        <div className='heading text-start'>
                            <h2>Best Seller</h2>
                            <p>Interdum et malesuada fames ac ante ipsum</p>
                        </div>
                    </div>

                    <OwlCarousel className='owl-theme slider3' loop={false} margin={10} nav {...option2}>
                        <div class='item' className='best-p'>
                            <div className='best-img'>
                                <img src={img22}></img>
                            </div>
                            <h7 className='discount'>Breakfast Included</h7>
                            <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>

                            <div className='best-content my-4'>
                                <span>DoubleTree by Hilton Hotel New York Times Square West</span>
                                <p>Vaticano Prati, Rome</p>
                                <ul className='d-flex align-items-center'>
                                    <li className='rate'>4.5</li>
                                    <li className='type'>Exceptional</li>
                                    <li className='review'>2343 reviews</li>
                                </ul>
                                <h6 className='d-flex align-items-center'>Starting from <p>US$89</p></h6>
                            </div>
                        </div>
                        <div class='item' className='best-p'>
                            <div className='best-img'>
                                <img src={img23}></img>
                            </div>

                            <h7 className='discount dis1'>Best Seller</h7>
                            <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>
                            <div className='best-content my-4'>
                                <span>The Montcalm At Brewery London City</span>
                                <p>Westminster Borough, London</p>
                                <ul className='d-flex align-items-center'>
                                    <li className='rate'>4.8</li>
                                    <li className='type'>Exceptional</li>
                                    <li className='review'>3014 reviews</li>
                                </ul>
                                <h6 className='d-flex align-items-center'>Starting from <p>US$99</p></h6>
                            </div>
                        </div>
                        <div class='item' className='best-p'>
                            <div className='best-img'>
                                <img src={img24}></img>
                            </div>

                            <h7 className='discount dis2'>Top Rated</h7>
                            <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>
                            <div className='best-content my-4'>
                                <span>The Montcalm At Brewery London City</span>
                                <p>Westminster Borough, London</p>
                                <ul className='d-flex align-items-center'>
                                    <li className='rate'>4.7</li>
                                    <li className='type'>Exceptional</li>
                                    <li className='review'>3467 reviews</li>
                                </ul>
                                <h6 className='d-flex align-items-center'>Starting from <p>US$79</p></h6>
                            </div>

                        </div>
                        <div class='item' className='best-p'>
                            <div className='best-img'>
                                <img src={img25}></img>
                            </div>

                            <h7 className='discount dis3'>-25% Today</h7>
                            <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>
                            <div className='best-content my-4'>
                                <span>Staycity Aparthotels Deptford Bridge Station</span>
                                <p>Ciutat Vella, Barcelona</p>
                                <ul className='d-flex align-items-center'>
                                    <li className='rate'>4.8</li>
                                    <li className='type'>Exceptional</li>
                                    <li className='review'>3014 reviews</li>
                                </ul>
                                <h6 className='d-flex align-items-center'>Starting from <p>US$88</p></h6>
                            </div>

                        </div>
                        <div class='item' className='best-p'>
                            <div className='best-img'>
                                <img src={img22}></img>
                            </div>
                            <h7 className='discount'>Breakfast Included</h7>
                            <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>

                            <div className='best-content my-4'>
                                <span>The Westin New York at Times Square West</span>
                                <p>Manhattan, New York</p>
                                <ul className='d-flex align-items-center'>
                                    <li className='rate'>4.9</li>
                                    <li className='type'>Exceptional</li>
                                    <li className='review'>7654 reviews</li>
                                </ul>
                                <h6 className='d-flex align-items-center'>Starting from <p>US$68</p></h6>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>
            </Container>
        </>
    )
}

export default Seller;