// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhSKpu87Zek4AaODZUGJ7k7_amoy9sINg",
  authDomain: "oganic-food-53ee6.firebaseapp.com",
  projectId: "oganic-food-53ee6",
  storageBucket: "oganic-food-53ee6.appspot.com",
  messagingSenderId: "126495070822",
  appId: "1:126495070822:web:6df7eca14c2417283f2ba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth};