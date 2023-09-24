import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import {collection, getFirestore, onSnapshot} from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkoFrLubpvUl_lI8Nik4CifbfXw0sQfyg",
    authDomain: "expense-tracker-7bfd2.firebaseapp.com",
    projectId: "expense-tracker-7bfd2",
    storageBucket: "expense-tracker-7bfd2.appspot.com",
    messagingSenderId: "296588140358",
    appId: "1:296588140358:web:b99543a36b9d2f98468f47",
    measurementId: "G-KQ5CH6H1ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const provider = new GoogleAuthProvider();

const ref = collection(database,"transaction");