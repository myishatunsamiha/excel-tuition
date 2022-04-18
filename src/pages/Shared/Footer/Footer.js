import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer d-flex justify-content-center'>
            <p className='mt-4'><small>Copyright &copy; {year} - Myisha Tun Samiha</small></p>
        </div>
    );
};

export default Footer;