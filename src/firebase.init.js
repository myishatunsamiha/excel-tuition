import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4yjlct4zkPDx6Gc6hmpv4jCTdFaHrtAM",
    authDomain: "excel-tuition.firebaseapp.com",
    projectId: "excel-tuition",
    storageBucket: "excel-tuition.appspot.com",
    messagingSenderId: "11022810511",
    appId: "1:11022810511:web:09054effa1b404e9f99ffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;