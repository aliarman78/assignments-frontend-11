import { getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Toast } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import app from '../../FirebaseInit';
import NavBar from '../NavBar/NavBar';
import Spinner from "../Spinner/Spinner";




const auth = getAuth(app);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);
    const [mail, setMail] = useState('');
    const handlemail = event => {
        setMail(event.target.value);
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }




    const handleUserSignIn = event => {
        event.preventDefault();
        // signInWithEmailAndPassword(email, password);
        signInWithEmailAndPassword(email, password);

    }

    const [signInWithGoogle, userOne, load, err] = useSignInWithGoogle(auth);
    if (userOne) {
        navigate(from, { replace: true });
    }
    if (load) {
        return <Spinner></Spinner>
    }





    if (sending) {
        return <div>
            <Spinner></Spinner>
            <p>Sending...</p>
        </div>;
    }
    return (
        <div>
            <NavBar></NavBar>

            <div className='border mt-5 p-5'>
                <form onSubmit={handleUserSignIn}>
                    <h1>Email: <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' required /></h1>
                    <h1>Password: <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Enter password' required /></h1>
                    {
                        error ?
                            <h2 className="text-danger">Email or Password don't match.</h2>
                            :
                            <></>
                    }
                    <input className='btn btn-primary btn-lg' type="submit" value='Login' />

                    
                    <h6 className='mt-2'>Don't have an accout? <Link to="/signup">Signup Here</Link></h6>
                    <h1 onClick={() => signInWithGoogle()} className='btn btn-primary btn-lg mt-3'>Login with Google</h1>
                </form>
                <div className="d-flex mt-5 justify-content-center">
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Do you want to foget password?</strong>

                        </Toast.Header>
                        <Toast.Body>
                            <p>Email: <input onBlur={handlemail} type="email" name="email" placeholder='Enter your email' required /></p>
                            <Button onClick={async () => {
                                await sendPasswordResetEmail(mail);
                                alert('Sent email');
                            }}>Send Email</Button></Toast.Body>
                    </Toast>
                </div>
            </div>
        </div>
    );
};

export default Login;