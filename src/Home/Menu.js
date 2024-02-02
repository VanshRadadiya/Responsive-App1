import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import { FaCaretDown, FaRegUserCircle, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaRegHeart, FaStar, FaApple, FaGooglePlay, FaGlobeAsia } from 'react-icons/fa';
import { FaArrowTrendUp, FaRegNewspaper } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
import React from 'react';
import { useState } from 'react';
import img1 from '../image/logo1.svg';
import img2 from '../image/menu1.png';
import img3 from '../image/logo.svg';
import { Link } from "react-router-dom";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="menu">
      <Container>
        <Row className='top-menu justify-content-sm-between'>
          <Col className='d-sm-none d-xl-block menu-left' xs="auto" xl="auto" xxl="auto">
            <ul className='main-menu d-flex'>
              <li>Home<FaCaretDown></FaCaretDown>
                <ul className='sub-menu'>
                  <li>Home 1</li>
                  <li>Home 2</li>
                  <li>Home 3</li>
                  <li>Home 4</li>
                  <li>Home 5</li>
                  <li>Home 6</li>
                  <li>Home 7</li>
                  <li>Home 8</li>
                  <li>Home 9</li>
                  <li>Home 10</li>
                </ul>
              </li>
              <li>Categories<FaCaretDown></FaCaretDown>
                <ul className='sub-menu sub-menu-1 d-flex'>
                  <li><a href=''>Hotel</a>
                    <ul className='peta-menu d-flex'>
                      <ul>
                        <li>Hotel List </li>
                        <li>Hotel List v1</li>
                        <li>Hotel List v1</li>
                        <li>Hotel List v1</li>
                        <li>Hotel List v1</li>
                        <li>Hotel List v1</li>
                      </ul>

                      <ul>
                        <li>Hotel Single</li>
                        <li>Hotel Single v1</li>
                        <li>Hotel Single v2</li>
                      </ul>

                      <ul>
                        <li><a href=''>Hotel Booking</a></li>
                        <li><a href=''>Booking Page</a></li>
                      </ul>

                      <ul className='menu-img'>
                        <li><img src={img2}></img></li>
                      </ul>
                    </ul>
                  </li>
                  <li><a href=''>Tour</a>

                  </li>
                  <li><a href=''>Activity</a>

                  </li>
                  <li><a href=''>Holiday Rentals</a>

                  </li>
                  <li><a href=''>Car</a>

                  </li>
                  <li><a href=''>Cruise</a>

                  </li>
                  <li><a href=''>Flights</a>

                  </li>
                </ul>
              </li>
              <li>Destination</li>
              <li>Blog<FaCaretDown></FaCaretDown>
                <ul className='sub-menu'>
                  <li><Link to="/Blog" style={{color:'#051036'}}>Blog List 1</Link></li>
                  <li>Blog List 2</li>
                  <li><Link to="/Blog_Single" style={{color:'#051036'}}>Blog Single</Link></li>
                </ul>
              </li>
              <li>Pages<FaCaretDown></FaCaretDown>
                <ul className='sub-menu'>
                  <li><Link to='/Page_404' style={{color:'#051036'}}>404</Link></li>
                  <li><Link to='/Page_about' style={{color:'#051036'}}>About</Link></li>
                  <li><Link to='/Page_Expert' style={{color:'#051036'}}>Become Expert</Link></li>
                  <li>Help Center</li>
                  <li>Login</li>
                  <li>Register</li>
                  <li>Terms</li>
                  <li>Invoice</li>
                </ul>
              </li>
              <li>Dashboard<FaCaretDown></FaCaretDown>
                <ul className='sub-menu'>
                  <li>Dashboard</li>
                  <li>Booking History</li>
                  <li>Wishlist</li>
                  <li>Settings</li>
                  <li>Vendor Dashboard</li>
                  <li>Vendor Add Hotel</li>
                  <li>Vendor Bookin</li>
                  <li>Vendor Hotels</li>
                  <li>Vendor Recovery</li>
                  <li>Log Out</li>
                </ul>
              </li>
              <li><Link to='/Contact' style={{color:'white'}}>Contact</Link></li>
            </ul>
          </Col>
          <Col className='text-center d-xl-none d-xxl-block' xs={6} sm="auto" md="auto" xxl="auto">
            <img src={img1}></img>
          </Col>
          <Col className='text-center d-sm-none menu-btn d-md-block' md="auto" xl="auto" xxl="auto">
            <button className='menu-btn btn1'><a href=''>Become an Expert</a></button>
            <button className='menu-btn btn2'><a href=''>Sign In / Register</a></button>
          </Col>
          <Col className='d-xl-none d-flex menu-c' xs={6} sm="auto" md="auto">
            <div>
              <FaRegUserCircle className='ms-5 menu-user'></FaRegUserCircle>
            </div>

            <div>
              <CiMenuFries className='menu-user' variant="primary" onClick={handleShow}>
              </CiMenuFries>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title><img src={img3}></img></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Home</Accordion.Header>
                      <Accordion.Body>
                        <ul className='menu-accordian'>
                          <li><a href=''>Home 1</a></li>
                          <li><a href=''>Home 2</a></li>
                          <li><a href=''>Home 3</a></li>
                          <li><a href=''>Home 4</a></li>
                          <li><a href=''>Home 5</a></li>
                          <li><a href=''>Home 6</a></li>
                          <li><a href=''>Home 7</a></li>
                          <li><a href=''>Home 8</a></li>
                          <li><a href=''>Home 9</a></li>
                          <li><a href=''>Home 10</a></li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Categories</Accordion.Header>
                      <Accordion.Body>
                        <ul className='menu-accordian'>
                          <li><a href=''>Hotel</a></li>
                          <li><a href=''>Tour</a></li>
                          <li><a href=''>Activity</a></li>
                          <li><a href=''>Hotel Rentals</a></li>
                          <li><a href=''>Car</a></li>
                          <li><a href=''>Cruise</a></li>
                          <li><a href=''>Flights</a></li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Destinations</Accordion.Header>
                      <Accordion.Body>
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Blog</Accordion.Header>
                      <Accordion.Body>
                        <ul className='menu-accordian'>
                          <li><a href=''>Blog List V1</a></li>
                          <li><a href=''>Blog List V2</a></li>
                          <li><a href=''>Blog List V3</a></li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Pages</Accordion.Header>
                      <Accordion.Body>
                        <ul className='menu-accordian'>
                          <li><a href=''>404</a></li>
                          <li><a href=''>About</a></li>
                          <li><a href=''>Become Expert</a></li>
                          <li><a href=''>Help Center</a></li>
                          <li><a href=''>Login</a></li>
                          <li><a href=''>Register</a></li>
                          <li><a href=''>Terms</a></li>
                          <li><a href=''>Invoice</a></li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Dashboard</Accordion.Header>
                      <Accordion.Body>
                        <ul className='menu-accordian'>
                          <li><a href=''>Dashboard</a></li>
                          <li><a href=''>Booking History</a></li>
                          <li><a href=''>Wishlist</a></li>
                          <li><a href=''>Settings</a></li>
                          <li><a href=''>Vendor Dashboard</a></li>
                          <li><a href=''>Vendor Add Hotel</a></li>
                          <li><a href=''>Vendor Booking</a></li>
                          <li><a href=''>Vendor Hotels</a></li>
                          <li><a href=''>Vendor Recovery</a></li>
                          <li><a href=''>Log Out</a></li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                      <Accordion.Header>Contact</Accordion.Header>
                      <Accordion.Body>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>

                  <p className='canvas-p'>Toll Free Customer Care</p>
                  <h6 className='canvas-h'>+(1) 123 456 789</h6>
                  <p className='canvas-p'>Need Live Support</p>
                  <h6 className='canvas-h'>hi@gotrip.com</h6>
                  <p className='canvas-p1'>Follow Us On Social Media</p>
                  <FaFacebookF className='canvas-i'></FaFacebookF>
                  <FaTwitter className='canvas-i'></FaTwitter>
                  <FaInstagram className='canvas-i'></FaInstagram>
                  <FaLinkedinIn className='canvas-i'></FaLinkedinIn><br></br>
                  <button className='canvas-btn'><a href=''>Become An Expert</a></button>




                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Menu;