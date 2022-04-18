import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import { useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const [user, loading] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const nameRef = useRef('');
    const phoneRef = useRef('');
    const addressRef = useRef('');

    const navigate = useNavigate();

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    const handleUpdate = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;

        await updateProfile({
            displayName: name,
            phoneNumber: phone,
            tenantId: address,
            photoURL: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        });
        toast('Thank you for the booking');
        console.log(user)
    }

    return (
        <div>
            <div className='m-5 text-center'>
                <h2>Give Personal Information</h2>
                <form onSubmit={handleUpdate}>
                    <input ref={nameRef} type="text" name="name" id="name" placeholder='enter name' required />
                    {
                        user?.email && <input type="email" name="email" id="email" value={user?.email} readOnly />
                    }
                    <input ref={phoneRef} type="text" name="phone" id="phone" placeholder='enter phone number' required />
                    <input ref={addressRef} type="text" name="address" id="address" placeholder='enter address' required />
                    <input type="submit" value="Check Out" className='btn-dark text-light' />
                </form>
                {errorElement}

                <ToastContainer />
            </div>
            <br /><br /><br />
        </div>
    );
};

export default CheckOut;