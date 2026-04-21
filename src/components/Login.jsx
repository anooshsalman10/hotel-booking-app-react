import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './Firebase.jsx';
import { toast } from 'react-toastify';
import SignInWithGoogle from './SignInWithGoogle.jsx';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("user logged in successfully!");
            navigate('/profile');           
            toast.success("User logged in successfully!", {
                position: "top-center",
            });

        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Login to Your Account
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-1 text-gray-600">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block mb-1 text-gray-600">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Button */}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
                
                <SignInWithGoogle />

                {/* Extra */}
                <Link to="/register">
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don’t have an account? <span className="text-blue-500 cursor-pointer">Sign up</span>
                </p>
                </Link>

            </form>
        </div>
    )
}

export default Login