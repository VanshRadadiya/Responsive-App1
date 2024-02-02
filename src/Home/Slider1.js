import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import React from 'react';
import img4 from '../image/slider.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider1() {
    return (
        <>
            <OwlCarousel className='owl-theme slider1' loop items={1} nav={false} dots={false} autoplay={true} autoplayTimeout={3000}>
                <div class='item'>
                    <img src={img4}></img>

                </div>
                <div class='item'>
                    <img src={img4}></img>

                </div>
                <div class='item'>
                    <img src={img4}></img>

                </div>
            </OwlCarousel>

            <div className='slider-content'>
                <h1>Find Your Dream Luxury Hotel</h1>
                <p>Discover amazing places at exclusive deals</p>
                <button><a href=''>Discover More</a></button>
                <Row className='list align-items-center'>
                    <Col className='list1 text-start' sm={12} xl>
                        <h7>Location</h7>
                        <p className='p-0'>Where are you going</p>
                    </Col>
                    <Col className='list1 list-11 text-start' sm={12} xl>
                        <h7>Check in - Check Out</h7>
                        <p className='p-0'>December 05 ~ January 14</p>
                    </Col>
                    <Col className='list1 text-start' sm={12} xl>
                        <h7>Guest</h7>
                        <p className='p-0'>2 adults - 1 children - 1room</p>
                    </Col>
                    <Col className='list1-btn' sm={12} xl={2}>
                        <a href=''>Search</a>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Slider1;