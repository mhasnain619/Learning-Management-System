// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyAJSsEhz0rkidWej1zVrklMcZqHvRGx0Io",
    authDomain: "laerninimahagementsystem.firebaseapp.com",
    projectId: "laerninimahagementsystem",
    storageBucket: "laerninimahagementsystem.firebasestorage.app",
    messagingSenderId: "580127459396",
    appId: "1:580127459396:web:3d0f3fc71162b557d41411",
    measurementId: "G-7JNF3JT9ZD"
};

// Initialize Firebase
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db }