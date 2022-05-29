import { getAuth } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Toast } from "react-bootstrap";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import app from '../../FirebaseInit';
import NavBar from '../NavBar/NavBar';
import Spinner from "../Spinner/Spinner";


const auth = getAuth(app);
const ForgetPass = () => {

    const [mail, setMail] = useState('');
    const handleEmailBlur = event => {
        setMail(event.target.value);
    }
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth);
    if (sending) {
        return <div>
            <Spinner></Spinner>
            <p>Sending...</p>
        </div>;
    }
    return (
        <div>
            <NavBar></NavBar>
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Do you want to foget password?</strong>

                </Toast.Header>
                <Toast.Body>
                    <p>Email: <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Enter your email' required /></p>
                    <Button onClick={async () => {
                        await sendPasswordResetEmail(mail);
                        alert('Sent email');
                    }}>Send Email</Button></Toast.Body>
            </Toast>
        </div>
    );
};

export default ForgetPass;