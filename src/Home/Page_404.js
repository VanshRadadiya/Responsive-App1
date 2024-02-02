import Menu from "./Menu";
import Footer from "./Footer";
import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import page from '../image/404.svg';
import { FaRegNewspaper } from "react-icons/fa";



function Page_404() {
    return (
        <>
            <Menu></Menu>

            {/* 404 Start */}
            <Container className="spacery page">
                <Row>
                    <Col xs={12} lg className="page-img my-auto pt-5"><img src={page}></img></Col>
                    <Col xs={12} lg className="my-auto px-lg-5 pt-5">
                        <div className="page-content">
                            <h1>40<span>4</span></h1>
                            <h2>Oops! It looks like you're lost.</h2>
                            <p>The page you're looking for isn't available. Try to search again or use the go to.</p>
                            <button className="page-btn"><a href="">Go back to homepage</a></button>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* 404 End */}

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

export default Page_404;