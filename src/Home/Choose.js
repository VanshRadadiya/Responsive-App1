import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import React from 'react';
import img19 from '../image/choose1.svg';
import img20 from '../image/choose2.svg';
import img21 from '../image/choose3.svg';

function Choose() {
    return (
        <>
            <Container>
                <div className='spacery choose'>
                    <div className='heading text-center'>
                        <h2>Why Choose Us</h2>
                        <p>These popular destinations have a lot to offer</p>
                    </div>

                    <Row className='choose-part'>
                        <Col className='text-center choose-p' xs={12} sm={6} lg={4}>
                            <img src={img19}></img>
                            <h5>Best Price Guarantee</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Col>
                        <Col className='text-center choose-p' xs={12} sm={6} lg={4}>
                            <img src={img20}></img>
                            <h5>Easy & Quick Booking</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Col>
                        <Col className='text-center choose-p' xs={12} sm={6} lg={4}>
                            <img src={img21}></img>
                            <h5>Customer Care 24/7</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Choose;