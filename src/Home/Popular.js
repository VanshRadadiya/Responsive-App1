import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import { FaCaretDown, FaRegUserCircle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRegHeart, FaStar, FaApple, FaGooglePlay, FaGlobeAsia } from 'react-icons/fa';
import { FaArrowTrendUp, FaRegNewspaper } from "react-icons/fa6";
import React from 'react';
import img10 from '../image/pop1.png';
import img11 from '../image/pop2.png';
import img12 from '../image/pop3.png';
import img13 from '../image/pop4.png';
import img14 from '../image/pop5.png';
import img15 from '../image/pop6.png';
import img16 from '../image/pop7.png';
import img17 from '../image/pop8.png';

function Popular(){
    return(
        <>
             <Container>
        <div className="spacery">
          <div className='popular'>
            <div className='heading text-center'>
              <h2>Popular Hotels</h2>
              <p>Interdum et malesuada fames ac ante ipsum</p>
              <ul className='d-flex justify-content-center mt-5'>
                <li><a href='' className='px-3 py-2 mx-2'>New York</a></li>
                <li><a href='' className='px-3 py-2 mx-2'>London</a></li>
                <li><a href='' className='px-3 py-2 mx-2'>Paris</a></li>
                <li><a href='' className='px-3 py-2 mx-2'>Istanbul</a></li>
              </ul>
            </div>
          </div>

          <Row className='popular-part'>
            <Col sm={12} md={6} lg={3} className='popular-p'>
              <div className='popular-img'>
                <img src={img10}></img>
              </div>
              <h7 className='discount'>Breakfast Included</h7>
              <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>

              <div className='popular-content my-4'>
                <span>The Montcalm At Brewery London City</span>
                <p>Westminster Borough, London</p>
                <ul className='d-flex align-items-center'>
                  <li className='rate'>4.7</li>
                  <li className='type'>Exceptional</li>
                  <li className='review'>3014 reviews</li>
                </ul>
                <h6 className='d-flex align-items-center'>Starting from <p>US$72</p></h6>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3} className='popular-p'>
              <div className='popular-img'>
                <img src={img11}></img>
              </div>

              <h7 className='discount dis1'>Best Seller</h7>
              <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>
              <div className='popular-content my-4'>
                <span>The Westin New York at Times Square West</span>
                <p>Manhattan, New York</p>
                <ul className='d-flex align-items-center'>
                  <li className='rate'>4.7</li>
                  <li className='type'>Exceptional</li>
                  <li className='review'>3014 reviews</li>
                </ul>
                <h6 className='d-flex align-items-center'>Starting from <p>US$68</p></h6>
              </div>
            </Col>
            <Col sm={12} md={6} lg={3} className='popular-p'>
              <div className='popular-img'>
                <img src={img12}></img>
              </div>

              <h7 className='discount dis2'>Top Rated</h7>
              <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>
              <div className='popular-content my-4'>
                <span>DoubleTree by Hilton Hotel New York Times Square West</span>
                <p>Vaticano Prati, Rome</p>
                <ul className='d-flex align-items-center'>
                  <li className='rate'>4.7</li>
                  <li className='type'>Exceptional</li>
                  <li className='review'>3014 reviews</li>
                </ul>
                <h6 className='d-flex align-items-center'>Starting from <p>US$89</p></h6>
              </div>

            </Col>
            <Col sm={12} md={6} lg={3} className='popular-p'>
              <div className='popular-img'>
                <img src={img13}></img>
              </div>

              <h7 className='discount dis3'>-25% Today</h7>
              <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>
              <div className='popular-content my-4'>
                <span>The Montcalm At Brewery London City</span>
                <p>Westminster Borough, London</p>
                <ul className='d-flex align-items-center'>
                  <li className='rate'>4.7</li>
                  <li className='type'>Exceptional</li>
                  <li className='review'>3014 reviews</li>
                </ul>
                <h6 className='d-flex align-items-center'>Starting from <p>US$79</p></h6>
              </div>

            </Col>
            <Col sm={12} md={6} lg={3} className='popular-p'>
              <div className='popular-img'>
                <img src={img14}></img>
              </div>

              <h7 className='discount'>Breakfast Included</h7>
              <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>
              <div className='popular-content my-4'>
                <span>Staycity Aparthotels Deptford Bridge Station</span>
                <p>Ciutat Vella, Barcelona</p>
                <ul className='d-flex align-items-center'>
                  <li className='rate'>4.7</li>
                  <li className='type'>Exceptional</li>
                  <li className='review'>3014 reviews</li>
                </ul>
                <h6 className='d-flex align-items-center'>Starting from <p>US$88</p></h6>
              </div>

            </Col>
            <Col sm={12} md={6} lg={3} className='popular-p'>
              <div className='popular-img'>
                <img src={img15}></img>
              </div>
              <h7 className='discount dis1'>Best Seller</h7>
              <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>

              <div className='popular-content my-4'>
                <span>The Montcalm At Brewery London City</span>
                <p>Westminster Borough, London</p>
                <ul className='d-flex align-items-center'>
                  <li className='rate'>4.7</li>
                  <li className='type'>Exceptional</li>
                  <li className='review'>3014 reviews</li>
                </ul>
                <h6 className='d-flex align-items-center'>Starting from <p>US$72</p></h6>
              </div>

            </Col>
            <Col sm={12} md={6} lg={3} className='popular-p'>
              <div className='popular-img'>
                <img src={img16}></img>
              </div>

              <h7 className='discount'>Breakfast Included</h7>
              <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>
              <div className='popular-content my-4'>
                <span>The Westin New York at Times Square West</span>
                <p>Manhattan, New York</p>
                <ul className='d-flex align-items-center'>
                  <li className='rate'>4.7</li>
                  <li className='type'>Exceptional</li>
                  <li className='review'>3014 reviews</li>
                </ul>
                <h6 className='d-flex align-items-center'>Starting from <p>US$68</p></h6>
              </div>

            </Col>
            <Col sm={12} md={6} lg={3} className='popular-p'>
              <div className='popular-img'>
                <img src={img17}></img>
              </div>
              <h7 className='discount dis1'>Best Seller</h7>
              <p className='like-part'><FaRegHeart className='like'></FaRegHeart></p>
              <div className='popular-content my-4'>
                <span>The Montcalm At Brewery London City</span>
                <p>Westminster Borough, London</p>
                <ul className='d-flex align-items-center'>
                  <li className='rate'>4.7</li>
                  <li className='type'>Exceptional</li>
                  <li className='review'>3014 reviews</li>
                </ul>
                <h6 className='d-flex align-items-center'>Starting from <p>US$99</p></h6>
              </div>

            </Col>
          </Row>

          <button className='popular-btn'><a href=''>View All <FaArrowTrendUp></FaArrowTrendUp></a></button>
        </div>
      </Container>
        </>
    )
}

export default Popular;