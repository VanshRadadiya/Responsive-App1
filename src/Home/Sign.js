import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import { FaArrowTrendUp, FaRegNewspaper } from "react-icons/fa6";
import React from 'react';
function Sign() {
    return (
        <>
            <div className='sign spacery'>
                <Container>
                    <div className='text-center'>
                        <FaRegNewspaper className='sign-letter'></FaRegNewspaper>
                        <h2>Your Travel Journey Starts Here</h2>
                        <p>Sign up and we'll send the best deals to you</p>
                        <div className='form'>
                            <input type='text' placeholder='Your Email'></input>
                            <button className='sign-btn'><a href=''>Subsrcibe</a></button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Sign;