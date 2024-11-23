
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBmFbt7DeCxLd57DVCrUY5yiMFFqwNqnY",
  authDomain: "unifocus-1a029.firebaseapp.com",
  projectId: "unifocus-1a029",
  storageBucket: "unifocus-1a029.firebasestorage.app",
  messagingSenderId: "80658062438",
  appId: "1:80658062438:web:7d8e22768b3289cd23a1a7",
  measurementId: "G-QXJ25CVBNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 

export default app;