import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import img35 from '../image/inspire1.png';
import img36 from '../image/inspire2.png';
import img37 from '../image/inspire3.png';
import img38 from '../image/inspire4.png';
import React from 'react';

function Inspire() {
    return (
        <Container>
            <div className='spacery'>
                <div className='heading text-center'>
                    <h2>Get inspiration for your next trip</h2>
                    <p>Interdum et malesuada fames</p>
                </div>

                <Row className='inspire'>
                    <Col xs={12} sm={6} lg={3}>
                        <div className='inspire-img'>
                            <img src={img35}></img>
                        </div>
                        <div className='inspire-content mt-4'>
                            <h5>10 European ski destinations you should visit this winter</h5>
                            <p>Jan 06, 2023</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className='inspire-img'>
                            <img src={img36}></img>
                        </div>
                        <div className='inspire-content mt-4'>
                            <h5>1Booking travel during Corona: good advice in an uncertain time</h5>
                            <p>April 06, 2022</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className='inspire-img'>
                            <img src={img37}></img>
                        </div>
                        <div className='inspire-content mt-4'>
                            <h5>Where can I go? 5 amazing countries that open right now</h5>
                            <p>Jan 06, 2023</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <div className='inspire-img'>
                            <img src={img38}></img>
                        </div>
                        <div className='inspire-content mt-4'>
                            <h5>10 European ski destinations you should visit this winter</h5>
                            <p>April 06, 2023</p>
                        </div>
                    </Col>
                </Row>

            </div>
        </Container>
    )
}

export default Inspire;