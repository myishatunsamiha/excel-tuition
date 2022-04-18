import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    const navigate = useNavigate();

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {     // if logged in successfully redirect the user to home page
        navigate('/');
        console.log(user);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='m-5 text-center'>
            <h2 className='text-center'>Login Form</h2>
            <form onSubmit={handleLogin}>
                <input ref={emailRef} type="email" name="email" id="email" placeholder='enter email' />
                <input ref={passwordRef} type="password" name="password" id="password" placeholder='enter password' />
                <input type="submit" value="Login" className='btn-dark text-light' />
            </form>
            {errorElement}

            <p>Don't have an account? <Link to='/register' className='text-primary text-decoration-none'>Please Register</Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none'>Reset Password</button></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;