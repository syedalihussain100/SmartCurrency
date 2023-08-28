import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDKuH107LDQbjq8FCza4cfylMEZH05IBhw",
  authDomain: "solu-b451f.firebaseapp.com",
  projectId: "solu-b451f",
  storageBucket: "solu-b451f.appspot.com",
  messagingSenderId: "295210471154",
  appId: "1:295210471154:web:ba2a07bf6100192f518a6b",
  measurementId: "G-CYEF9FM8JN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

