// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBel4WYDvce4AAT9qV_r-QITFHdHhCcEPM",
  authDomain: "etrainindia-7d56f.firebaseapp.com",
  projectId: "etrainindia-7d56f",
  storageBucket: "etrainindia-7d56f.firebasestorage.app",
  messagingSenderId: "868183259305",
  appId: "1:868183259305:web:b2b05948155d66c13691b8",
  measurementId: "G-3XE43E8J11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);