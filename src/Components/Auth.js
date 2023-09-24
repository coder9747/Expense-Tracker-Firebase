import React from 'react'
import { provider } from "../Firebase/Config"
import { signInWithPopup } from 'firebase/auth';
import { auth } from "../Firebase/Config"
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const nagivage = useNavigate();
    async function handleClick() {
        try {
            const data = await signInWithPopup(auth, provider);
            const obj = {
                name: data.user.displayName,
                email: data.user.email,
                userId: data.user.uid,
                photoUrl: data.user.photoURL,
            }
            localStorage.setItem("user",JSON.stringify(obj));
            nagivage("/expense");

        } catch (error) {
            console.log(error.message);
        }



    }
    return (
        <div>
            <button onClick={handleClick}>Continue With Google</button>
        </div>
    )
}

export default Auth
