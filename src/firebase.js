import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCJPp1pQpjFO-KE5BTxGLFnkDnJtut1WXk",
    authDomain: "friends-7b7e9.firebaseapp.com",
    projectId: "friends-7b7e9",
    storageBucket: "friends-7b7e9.appspot.com",
    messagingSenderId: "354738053537",
    appId: "1:354738053537:web:99a80b812c72027c65ebe0",
    measurementId: "G-ZZZL51WQF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);