// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLs1NOU3dkR9L-oNpzlPySD1sw0srSnOs",
    authDomain: "clinica-collab.firebaseapp.com",
    projectId: "clinica-collab",
    storageBucket: "clinica-collab.firebasestorage.app",
    messagingSenderId: "12081009495",
    appId: "1:12081009495:web:9e3655407f0fb1f74ba412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);