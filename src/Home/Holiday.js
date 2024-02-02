import '../App.css';
import '../media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img18 from '../image/holiday.png';

import React from 'react';
function Holiday() {
    return (
        <>
            <div className='spacery holiday'>
                <div className='holiday-img'>
                    <img src={img18}></img>
                    <div className='holiday-content'>
                        <p>Happy Holiday</p>
                        <h1>Get Amazing Rates at Hotels Worldwide</h1>
                        <button className='holiday-btn'><a href=''>Find Deals</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Holiday;