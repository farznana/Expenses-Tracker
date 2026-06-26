// 1. Import core Firebase SDK versi 12.14.0 ikut kod notepad kau
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

// 2. Ini coding asal dari notepad kau tadi!
const firebaseConfig = {
    apiKey: "AIzaSyBifH2Tznj6CIYlGK9fmaU6KVj5-7OTdj4",
    authDomain: "expenses-tracker-18c98.firebaseapp.com",
    projectId: "expenses-tracker-18c98",
    storageBucket: "expenses-tracker-18c98.firebasestorage.app",
    messagingSenderId: "495267818258",
    appId: "1:495267818258:web:323bfa521330af6649a1cb"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4. Export untuk kegunaan fail auth.js
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword };