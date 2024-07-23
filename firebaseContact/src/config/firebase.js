// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqzEnR-Syny4IqoS3F1ojmUZMbIJg9c7I",
  authDomain: "vite-contact-c6e2e.firebaseapp.com",
  projectId: "vite-contact-c6e2e",
  storageBucket: "vite-contact-c6e2e.appspot.com",
  messagingSenderId: "1038957398162",
  appId: "1:1038957398162:web:e4d54465b54a71b0fcbe4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);