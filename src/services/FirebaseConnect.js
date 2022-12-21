
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANo2yvEdkrIBE-Y0b9VvjKbr_Fo6joSMs",
  authDomain: "wikiwars-atitus-6c216.firebaseapp.com",
  projectId: "wikiwars-atitus-6c216",
  storageBucket: "wikiwars-atitus-6c216.appspot.com",
  messagingSenderId: "370020264471",
  appId: "1:370020264471:web:3ead9f2411892eeadfca52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);