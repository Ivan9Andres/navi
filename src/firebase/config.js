// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASOA5hLpUmj1xRL-ZyKTVWNRpWe5W_hNQ",
  authDomain: "dezzer-5c07d.firebaseapp.com",
  projectId: "dezzer-5c07d",
  storageBucket: "dezzer-5c07d.firebasestorage.app",
  messagingSenderId: "1068256803521",
  appId: "1:1068256803521:web:7b3f2150a09a1021247240",
  measurementId: "G-RMG5WNVJEJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
