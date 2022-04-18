import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google-logo.png';
import github from '../../../images/social/github-logo.png';
import facebook from '../../../images/social/facebook-logo.png';

const SocialLogin = () => {
    return (
        <div>
            <p className='text-center text-muted'>or</p>

            <button className='btn d-block btn-dark text-light social-btn'><img src={google} width='25' alt='' /> Google LogIn</button>
            <button className='btn d-block bg-dark text-light social-btn'><img src={github} width='25' alt='' /> Github LogIn</button>
            <button className='btn d-block bg-dark text-light social-btn'><img src={facebook} width='25' alt='' /> Facebook LogIn</button>
        </div>
    );
};

export default SocialLogin;