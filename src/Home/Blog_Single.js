import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import Menu from './Menu';
import Inspire from "./Inspire";
import blog_single from '../image/blog-single.png';
import blog_single1 from '../image/single-book1.png';
import blog_single2 from '../image/single-book2.png';
import blog_single3 from '../image/simmons.png';
import blog_single4 from '../image/single-menu.svg';
import blog_single5 from '../image/reviews.png';
import blog_single6 from '../image/review1.png';
import blog_single7 from '../image/review2.png';
import blog_single8 from '../image/review3.png';
import blog_single9 from '../image/review4.png';
import { ImQuotesLeft } from "react-icons/im";
import {FaFacebookF,FaLinkedinIn ,FaInstagram,FaTwitter,FaArrowRight,FaArrowLeft,FaThumbsUp,FaThumbsDown,FaRegNewspaper } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import Footer from './Footer';

function Blog_Single() {
    return (
        <>
            <Menu></Menu>

            {/* First Line Start */}
            <Container>
                <Row className='first-line'>
                    <Col xs={12} md={6} className=' py-2'>
                        <Row>
                            <Col xs="auto">Europe</Col>
                            <Col xs="auto">-</Col>
                            <Col xs="auto">United Kingdom (UK)</Col>
                            <Col xs="auto">-</Col>
                            <Col xs="auto">London</Col>
                        </Row>
                    </Col>
                    <Col className='text-md-end py-2' xs={12} md={6}>London Tourism: Best of London</Col>
                </Row>
            </Container>
            {/* First Line End */}

            {/* Single Image Head Start */}
            <Container>
                <Row>
                    <Col xs="auto" className='mx-auto'>
                        <div className='single-heading text-center mt-5'>
                            <p>Art</p>
                            <h1>10 European ski destinations you should visit this winter</h1>
                            <h7>Jan 06, 2023</h7>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <div className='single-img mt-5'>
                            <img src={blog_single}></img>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Single Image Head End */}

            {/* Brand Book Start */}
            <Container>
                <Row className='justify-content-center book-single'>
                    <Col lg={10} xl={8} className='pt-5'>
                        <div className='book-content'>
                            <h5 className='m-0'>What makes a good brand book?</h5>
                            <p>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Semper risus in hendrerit gravida rutrum quisque non. At urna condimentum mattis pellentesque id nibh tortor. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mauris commodo quis imperdiet massa. Vitae congue eu consequat ac felis.</p>

                            <ul>
                                <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
                                <li>At urna condimentum mattis pellentesque id nibh. Laoreet non curabitur</li>
                                <li>Magna etiam tempor orci eu lobortis elementum.</li>
                                <li>Bibendum est ultricies integer quis. Semper eget duis at tellus.</li>
                            </ul>

                            <div className='d-flex book-imp'>
                                <ImQuotesLeft className='book-quote'></ImQuotesLeft>
                                <p>“Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris.“</p>
                            </div>

                            <p className='pt-3'>Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a, tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper lectus aliquet nullam tempus id. Dignissim convallis quam aliquam rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh lobortis elementum mus velit tincidunt elementum. Ridiculus eu convallis eu mattis iaculis et, in dolor. Sem libero, tortor suspendisse et, purus euismod posuere sit. Risus dui ut viverra venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing tristique sed facilisis velit.</p>

                            <p className='pt-2'>Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus dictum sit euismod cum id. Dictum integer ultricies arcu fermentum fermentum sem consectetur. Consectetur eleifend aenean eu neque euismod amet parturient turpis vitae. Faucibus ipsum felis et duis fames.</p>

                            <Row className='book-img'>
                                <Col xs={10} md={6}>
                                    <img src={blog_single1}></img>
                                    <p>Donec purus posuere nullam lacus aliquam.</p>
                                </Col>
                                <Col xs={10} md={6}>
                                    <img src={blog_single2}></img>
                                    <p>Donec purus posuere nullam lacus aliquam.</p>
                                </Col>
                            </Row>

                            <p className='pt-3'>Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a, tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper lectus aliquet nullam tempus id. Dignissim convallis quam aliquam rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh lobortis elementum mus velit tincidunt elementum. Ridiculus eu convallis eu mattis iaculis et, in dolor. Sem libero, tortor suspendisse et, purus euismod posuere sit. Risus dui ut viverra venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing tristique sed facilisis velit.</p>

                            <p className='pt-2'>Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus dictum sit euismod cum id. Dictum integer ultricies arcu fermentum fermentum sem consectetur. Consectetur eleifend aenean eu neque euismod amet parturient turpis vitae. Faucibus ipsum felis et duis fames.</p>

                            <Row className='justify-content-between pt-5'>
                                <Col className='d-sm-flex book-social py-3' xs={12} md={6}>
                                    <span>Share</span>
                                    <a href=''><FaFacebookF></FaFacebookF></a>
                                    <a href=''><FaTwitter></FaTwitter></a>
                                    <a href=''><FaInstagram></FaInstagram></a>
                                    <a href=''><FaLinkedinIn></FaLinkedinIn></a>
                                </Col>
                                <Col className='d-sm-flex justify-content-md-end book-btn py-3' sm={12} md={6}>
                                    <a href='' className='px-3 py-1 mx-2'>Art</a>
                                    <a href='' className='px-3 py-1 mx-2'>Beaches</a>
                                    <a href='' className='px-3 py-1 mx-2'>Adventure</a>
                                </Col>
                            </Row>

                            <hr></hr>

                            <Row className='py-4'> 
                                    <Col xs={12} md={1} className='py-3'><img src={blog_single3}></img></Col>
                                    <Col xs={12} md={11} className='py-3'>
                                        <div className='simmons-content ps-md-5'>
                                            <h3>Brooklyn Simmons</h3>
                                            <h7>Medical Assistant</h7>
                                            <p>Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                        </div>
                                    </Col>
                            </Row>

                            <hr></hr>

                            <Row className='next-prev'>
                                <Col xs={6} md className='py-4'>
                                    <div className='d-flex'>
                                        <span><FaArrowLeft></FaArrowLeft></span>
                                        <div className='ps-3'>
                                            <h5 className='mb-0'>Prev</h5>
                                            <p>5 awesome steps to get rid of <br></br>  stress and routine</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className='m-auto text-center py-4' xs={6} md>
                                    <img src={blog_single4}></img>
                                </Col>
                                <Col xs={6} md className='py-4'>
                                <div className='d-flex'>
                                        <div className='pe-3 text-end'>
                                            <h5 className='mb-0'>Next</h5>
                                            <p>5 awesome steps to get rid of <br></br>  stress and routine</p>
                                        </div>
                                        <span><FaArrowRight></FaArrowRight></span>
                                    </div>
                                </Col>
                            </Row>

                            <hr></hr>

                            <div className='reviews'>
                                <h4>Guest Reviews</h4>
                                <div className='d-flex align-items-center pt-3'>
                                    <img src={blog_single5}></img>
                                    <div className='ps-3'>
                                        <h7>Tonko</h7>
                                        <p>March 2022</p>
                                    </div>
                                </div>
                                <h3>9.2 Superb</h3>
                                <p className='reviews-para'>Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores.</p>

                                <Row className='review-img pt-5'>
                                    <Col xs={6} md className='py-3'><img src={blog_single6}></img></Col>
                                    <Col xs={6} md className='py-3'><img src={blog_single7}></img></Col>
                                    <Col xs={6} md className='py-3'><img src={blog_single8}></img></Col>
                                    <Col xs={6} md className='py-3'><img src={blog_single9}></img></Col>
                                </Row>

                                <div className='like-dislike d-flex pt-3'>
                                    <a href='' className='like-single'><FaThumbsUp></FaThumbsUp> Helpful</a>
                                    <a href='' className='px-5 dislike-single'><FaThumbsDown></FaThumbsDown> Not Helpful</a>
                                </div>
                            </div>

                            <div className='reviews pt-5'>
                                <div className='d-flex align-items-center pt-3'>
                                    <img src={blog_single5}></img>
                                    <div className='ps-3'>
                                        <h7>Tonko</h7>
                                        <p>March 2022</p>
                                    </div>
                                </div>
                                <h3>9.2 Superb</h3>
                                <p className='reviews-para'>Nice two level apartment in great London location. Located in quiet small street, but just 50 meters from main street and bus stop. Tube station is short walk, just like two grocery stores.</p>


                                <div className='like-dislike d-flex pt-3'>
                                    <a href='' className='like-single'><FaThumbsUp></FaThumbsUp> Helpful</a>
                                    <a href='' className='px-5 dislike-single'><FaThumbsDown></FaThumbsDown> Not Helpful</a>
                                </div>

                                <button className='review-btn'><a href=''>Show All 116 reviews<FaArrowTrendUp className='ms-2'></FaArrowTrendUp></a></button>
                            </div>

                            <hr></hr>

                            <div className='reply py-3'>
                                <h5>Leave a Reply</h5>
                                <p>Your email address will not be published.</p>

                                <Row className='reply-form'>
                                    <Col xs={12} xxl={6} className='py-3'><input type='text' placeholder='Text'></input></Col>
                                    <Col xs={12} xxl={6} className='py-3'><input type='text' placeholder='Email'></input></Col>
                                    <Col xs={12} className='py-3'><textarea className='w-100 px-2 py-3' placeholder='Write Your Comment'></textarea></Col>
                                </Row>
                                <button className='post-btn'><a href=''>Post Comment<FaArrowTrendUp className='ms-2'></FaArrowTrendUp></a></button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
            {/* Brand Book End */}

            <Inspire></Inspire>

            
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

export default Blog_Single;