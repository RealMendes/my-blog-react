import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWBYBEaKPHauFoDrA6u7LM0-1DOxKjzOY",
  authDomain: "minblog-135e5.firebaseapp.com",
  projectId: "minblog-135e5",
  storageBucket: "minblog-135e5.appspot.com",
  messagingSenderId: "475950974481",
  appId: "1:475950974481:web:e5bf7211e39089abb393b0"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };