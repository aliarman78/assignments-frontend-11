import { getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import app from '../../FirebaseInit';
import NavBar from '../NavBar/NavBar';
import Spinner from '../Spinner/Spinner';

const auth = getAuth(app);

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending,] = useSendEmailVerification(
        auth
    );

    let navigate = useNavigate();

    if (loading) {
        return <Spinner></Spinner>;
    }
    if (user) {
        navigate("/", { replace: true });
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignUp = event => {
        event.preventDefault();
        // signInWithEmailAndPassword(email, password);

        createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
        alert('Sent an email');


    }


    if (sending) {
        return <p>Sending...</p>;
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className='border mt-5 p-5'>
                <form onSubmit={handleUserSignUp}>
                    <h1>Email: <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' required /></h1>
                    <h1>Password: <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter password' required /></h1>
                    {
                        error ?
                        <p className="text-danger">Email Already Exist</p>
                        :
                        <></>
                    }
                    <input className='btn btn-primary btn-lg' type="submit" value='Sign Up' />
                </form>
            </div>
        </div>
    );
};

export default Signup;