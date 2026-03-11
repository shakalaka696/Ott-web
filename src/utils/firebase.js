// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmgXoLPwP4vGzSvH3nntoxHXuoiyQLpnU",
  authDomain: "ottweb-fa25f.firebaseapp.com",
  projectId: "ottweb-fa25f",
  storageBucket: "ottweb-fa25f.firebasestorage.app",
  messagingSenderId: "852111721004",
  appId: "1:852111721004:web:f6cf8298712f5c64694789",
  measurementId: "G-6J4625K956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
