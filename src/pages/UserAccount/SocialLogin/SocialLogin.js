import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google-logo.png';
import github from '../../../images/social/github-logo.png';
import facebook from '../../../images/social/facebook-logo.png';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { Navigate, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (googleError || gitError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} || {gitError?.message}</p>;
    }

    // if (googleLoading || gitLoading) {
    //     <Loading></Loading>
    // }

    if (googleUser || gitUser) {
        navigate('/');
    }

    return (
        <div>
            <p className='text-center text-muted'>or</p>

            <button className='btn d-block btn-dark text-light social-btn' onClick={() => signInWithGoogle()}><img src={google} width='25' alt='' /> Google LogIn</button>
            <button className='btn d-block bg-dark text-light social-btn' onClick={() => signInWithGithub()}><img src={github} width='25' alt='' /> Github LogIn</button>
            {/* <button className='btn d-block bg-dark text-light social-btn'><img src={facebook} width='25' alt='' /> Facebook LogIn</button> */}
            {errorElement}
        </div>
    );
};

export default SocialLogin;