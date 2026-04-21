import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from './Firebase.jsx'; // make sure path is correct
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname,
                });
            }
            console.log("User is registered successfully!");
            toast.success("User registered successfully!", {
                position: "top-center",
            });
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleRegister}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Create Account
                </h2>

                {/* First Name */}
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">First Name</label>
                    <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Last Name</label>
                    <input
                        type="text"
                        placeholder="Enter last name"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label className="block text-gray-600 mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
                >
                    Sign Up
                </button>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?
                    <Link to='/login'>
                        <span className="text-blue-500 cursor-pointer ml-1">Login</span>
                    </Link>
                </p>

            </form>
        </div>
    )
}

export default Register;