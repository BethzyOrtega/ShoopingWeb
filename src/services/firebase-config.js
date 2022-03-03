// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaDkfplM-diFVf-F3ndamsXYzfOavzKaM",
  authDomain: "shopping-eb3d5.firebaseapp.com",
  projectId: "shopping-eb3d5",
  storageBucket: "shopping-eb3d5.appspot.com",
  messagingSenderId: "947563618816",
  appId: "1:947563618816:web:84811c879383ec28c6aee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;