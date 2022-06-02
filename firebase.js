// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf3VGHSDK-8DHZv5PetLguOfC4K50XAIM",
  authDomain: "sparta-react-cff99.firebaseapp.com",
  projectId: "sparta-react-cff99",
  storageBucket: "sparta-react-cff99.appspot.com",
  messagingSenderId: "999263741289",
  appId: "1:999263741289:web:3760038684010d484e49f8",
  measurementId: "G-7Y6MTMKG2E"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();