// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC19gm0fXzIW99aMi4LOVcgzRhJPtXjP5E",
  authDomain: "lucas-blogs.firebaseapp.com",
  projectId: "lucas-blogs",
  storageBucket: "lucas-blogs.appspot.com",
  messagingSenderId: "563523097160",
  appId: "1:563523097160:web:5b53f31e4b62e07afa3e7d",
  measurementId: "G-5ZTGLY54CE"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// connectFirestoreEmulator(db,'localhost',3000);
