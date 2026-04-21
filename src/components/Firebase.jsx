import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import{getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyZu4pgC2t93WBAflZZkmAMlW2VYSBJ3I",
  authDomain: "hotel-booking-app-react-dd905.firebaseapp.com",
  projectId: "hotel-booking-app-react-dd905",
  storageBucket: "hotel-booking-app-react-dd905.firebasestorage.app",
  messagingSenderId: "429659969742",
  appId: "1:429659969742:web:c0ffe5bde75bd26c4e989f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db= getFirestore(app);
export default app;