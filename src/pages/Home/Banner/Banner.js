import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='row mt-5 align-items-center'>

            <div className='col-12 col-md-6'>
                <div className='p-3'>
                    <p className='page-title'>Excel Tuition</p>
                    <h4 className='text-muted'>Get excellence in career through getting pure and in-depth knowledge of your favorite course.</h4>
                    <Link to='/about' className='btn btn-dark d-block mt-4 w-50 text-light about-tutor-btn'>About Tutor</Link>
                </div>
            </div>

            <div className='col-12 col-md-6'>
                <Carousel activeIndex={index} onSelect={handleSelect} className='rounded m-3'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={banner1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={banner2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={banner3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>

    );
};

export default Banner;