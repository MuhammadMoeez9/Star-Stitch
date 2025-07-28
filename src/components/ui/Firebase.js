// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNSXhVjo8olKWS9hIagfHetlvUbZp0OUQ",
    authDomain: "star-stitch.firebaseapp.com",
    projectId: "star-stitch",
    storageBucket: "star-stitch.firebasestorage.app",
    messagingSenderId: "53579842232",
    appId: "1:53579842232:web:c7fff8a1a81639b5f02a4d",
    measurementId: "G-4Q7LLVN6DG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
