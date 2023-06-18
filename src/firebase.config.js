// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIKXrN0x-1GxjnWZ9BVSHT9TmorGiFh28",
  authDomain: "karma-otp-login.firebaseapp.com",
  projectId: "karma-otp-login",
  storageBucket: "karma-otp-login.appspot.com",
  messagingSenderId: "294128729327",
  appId: "1:294128729327:web:03f3f24ea13ab0291daf1a",
  measurementId: "G-3CTH2VNMP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);