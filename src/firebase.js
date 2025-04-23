// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4ea6a.firebaseapp.com",
  projectId: "mern-blog-4ea6a",
  storageBucket: "mern-blog-4ea6a.firebasestorage.app",
  messagingSenderId: "753514056099",
  appId: "1:753514056099:web:5ca7ea9c1b9fdf3151b216"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);