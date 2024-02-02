import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button, Accordion } from 'react-bootstrap';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img5 from '../image/des1.png';
import img6 from '../image/des2.png';
import img7 from '../image/des3.png';
import img8 from '../image/des4.png';
import img9 from '../image/des5.png';
const option1 = {
    responsive: {
  
      0: {
        items: 1,
        nav: false,
        dots: true,
        margin: 0,
      },
      576: {
        items: 1,
        margin: 20,
        nav: false,
      },
      768: {
        items: 2,
        margin: 20,
        dots: true,
        nav: false,
  
      },
      992: {
        items: 4,
        margin: 20,
      },
      1201: {
        items: 6,
        margin: 20,
      },
    }
  }
function Destinations() {
    return (
        <>
            <Container>
                <div className='spacery'>
                    <div className='heading text-center'>
                        <h2>Destinations Travellers Love</h2>
                        <p>These popular destinations have a lot to offer</p>
                    </div>

                    <OwlCarousel className='owl-theme slider2' loop={false} nav dots={false} {...option1}>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img5}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>London, UK</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img6}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>Edinburg, UK</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img7}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>France</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img8}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>Turkey</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img9}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>Spain</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img5}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>United Kingdom</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img6}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>Italy</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img7}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>France</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img8}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>London, UK</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>
                        <div class='item'>
                            <div className='slider2-img'>
                                <img src={img9}></img>
                            </div>
                            <div className='slider2-content'>
                                <h4>Edinburg, UK</h4>
                                <p>4,090 travellers</p>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </Container>
        </>
    )
}

export default Destinations;