import React from 'react';
import './About.css';
import about from '../../images/about.png';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about'>
                <div className='img-container'>
                    <img src={about} alt="" srcset="" />
                </div>

                <div className='info-container'>
                    <p className='fw-bold'>Myisha Tun Samiha</p>
                    <p className='fw-bold'>Education: United International University</p>
                    <p className='fw-bold'>Degree: BSc. in Computer Science and Engineering</p>
                    <p className='fw-bold'>Goal: <span className='text-muted'>I want to see myself as a successful developer and software engineer in near future. To fullfil my dream, I am always trying to devote myself in learning the technologies, using them in day to day life and pushing my boundaries to upgrade my knowledge. I believe, hard wark will always pays off.</span></p>
                </div>

            </div>
        </div>
    );
};

export default About;