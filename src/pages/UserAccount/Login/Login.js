import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');


    return (
        <div className='m-5 text-center'>
            <h2 className='text-center'>Login Form</h2>
            <form>
                <input ref={emailRef} type="email" name="email" id="email" placeholder='enter email' />
                <input ref={passwordRef} type="password" name="password" id="password" placeholder='enter password' />
                <input type="submit" value="Login" className='btn-dark text-light' />
            </form>

            <p>Don't have an account? <Link to='/register' className='text-primary text-decoration-none'>Please Register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;