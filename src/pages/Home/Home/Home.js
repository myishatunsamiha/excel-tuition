import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Courses></Courses>
        </div>
    );
};

export default Home;