import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {
    // variable declaration
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;
    const navigate = useNavigate();

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {     // if logged in successfully redirect the user to home page
        navigate('/');
        console.log(user);
    }

    const handleRegistration = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='m-5 text-center'>
            <h2 className='text-center'>Registration Form</h2>
            <form onSubmit={handleRegistration}>
                <input ref={emailRef} type="email" name="email" id="email" placeholder='enter email' />
                <input ref={passwordRef} type="password" name="password" id="password" placeholder='enter password' />
                <input type="submit" value="Register" className='btn-dark text-light' />
            </form>

            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none'>Please Login</Link></p>
            {errorElement}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;