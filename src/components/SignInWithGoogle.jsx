import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import google from '../assets/google.png';
import { auth, db } from './Firebase.jsx';
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const SignInWithGoogle = () => {

    const navigate = useNavigate();

    const googleLogin = () => {

        const provider = new GoogleAuthProvider();

        //--------THIS LINE IS IMPORTANT--------
        provider.setCustomParameters({
            prompt: "select_account"
        });

        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result);
            const user = result.user;
            if (result.user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: user.displayName,
                    photo: user.photoURL,
                });
                toast.success("User loggged in successfully!", {
                    position: "top-center",
                });
                navigate("/profile");
            }
        });
    }
    return (
        <div>
            <p className="text-gray-500 justify-center text-center py-4">--Or continue with--</p>
            <div
                style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
                onClick={googleLogin}
            >
                <img src={google} width={"60%"} />
            </div>

        </div>
    )
}

export default SignInWithGoogle
