// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAukxSrgpwmawHAkINdqa6J2CWpQ-hqkv8",
  authDomain: "simple-auth-673cf.firebaseapp.com",
  projectId: "simple-auth-673cf",
  storageBucket: "simple-auth-673cf.appspot.com",
  messagingSenderId: "674443130235",
  appId: "1:674443130235:web:ae3554c12d5f215f71f9de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);