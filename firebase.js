// /firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAT8VcUhs84i8bC0u5fpl7_DVWCmls3V2g",
  authDomain: "doorpvp-addc2.firebaseapp.com",
  projectId: "doorpvp-addc2",
  storageBucket: "doorpvp-addc2.firebasestorage.app",
  messagingSenderId: "596156968175",
  appId: "1:596156968175:web:13851279866fbd14a5bf1a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
