// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeIVQnbvBDQ8H8BE_65qyD2xAmPY5Tubg",
    authDomain: "vue-firebase-b521c.firebaseapp.com",
    projectId: "vue-firebase-b521c",
    storageBucket: "vue-firebase-b521c.firebasestorage.app",
    messagingSenderId: "630343526752",
    appId: "1:630343526752:web:73f007c587ba239d3b9605",
    measurementId: "G-5H49YF530P"
  };

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db };