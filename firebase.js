// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANzo3jRA_fSbZgaBecNFxnNQZLf536ges",
  authDomain: "choiseplan.firebaseapp.com",
  projectId: "choiseplan",
  storageBucket: "choiseplan.appspot.com",
  messagingSenderId: "243312861860",
  appId: "1:243312861860:web:2dc8e1bedd310514be7c31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();

export default app;