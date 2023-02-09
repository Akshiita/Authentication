// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb0krLUfV7cbU9H4l0yREkgsR3yeXdYOY",
  authDomain: "learninghub-fd434.firebaseapp.com",
  projectId: "learninghub-fd434",
  storageBucket: "learninghub-fd434.appspot.com",
  messagingSenderId: "219476535981",
  appId: "1:219476535981:web:e64b369796bfbf2b50b424",
  measurementId: "G-E1ZVR6YSML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}