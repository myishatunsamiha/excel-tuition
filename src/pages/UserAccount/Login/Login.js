import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithEmailAndPassword, user, loading, loginError] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );


    if (loginError || resetError) {
        errorElement = <p className='text-danger'>Error: {loginError?.message} {resetError?.message} </p>
    }

    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    if (user) {     // if logged in successfully redirect the user to home page
        console.log(from);
        navigate(from, { replace: true });
        console.log(user);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Mail is sent');
        } else {
            toast('Please enter your email');
        }
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
            <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;