// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1p70_igOlvui4rnTv_6UNFK-p3qgBQaw",
  authDomain: "visa-consultant-2f7c5.firebaseapp.com",
  projectId: "visa-consultant-2f7c5",
  storageBucket: "visa-consultant-2f7c5.appspot.com",
  messagingSenderId: "79495541773",
  appId: "1:79495541773:web:37f8696ae84a074df5d144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;