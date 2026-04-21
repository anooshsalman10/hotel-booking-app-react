import React, { useState, useEffect } from 'react';
import { auth, db } from './Firebase.jsx';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

  const navigate= useNavigate();

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
     try {
      await auth.signOut();
      navigate("/profile");
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {userDetails ? (
        <div className="bg-white p-6 rounded-xl shadow-md text-center">

          <h3 className="text-xl font-semibold mb-2">
            Welcome {userDetails.firstName}
          </h3>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo||"/logo2.png"} 
              width={"40%"}
              style={{ borderRadius: "50%" }}
            />
          </div>

          <div className="text-gray-600 mb-4">
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
            <p>Last Name: {userDetails.lastName}</p>
          </div>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}

    </div>
  );
};

export default Profile;