import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import React from 'react';

function Count() {
    return (
        <>
            <Container>
                <div className='spacery count'>
                    <Row>
                        <Col className='text-center my-2' xs={6} xl={3}>
                            <h1>4,958</h1>
                            <p>Destinations</p>
                        </Col>
                        <Col className='text-center my-2' xs={6} xl={3}>
                            <h1>2,869</h1>
                            <p>Total Properties</p>
                        </Col>
                        <Col className='text-center my-2' xs={6} xl={3}>
                            <h1>2M</h1>
                            <p>Happy Customers</p>
                        </Col>
                        <Col className='text-center my-2' xs={6} xl={3}>
                            <h1>574,974</h1>
                            <p>Our Volunteers</p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <hr className='count-hr'></hr>

        </>
    )
}

export default Count