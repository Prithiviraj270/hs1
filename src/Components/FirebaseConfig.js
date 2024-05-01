// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc,Timestamp, getDocs,doc, updateDoc, query, orderBy,deleteDoc,getDoc  } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyCWbPZCbR3_Yg0ZiTr88Lo9hebVSwA8SjM",
  authDomain: "hanger-store.firebaseapp.com",
  projectId: "hanger-store",
  storageBucket: "hanger-store.appspot.com",
  messagingSenderId: "312999730060",
  appId: "1:312999730060:web:74cea0506b2bf48796d4a9",
  measurementId: "G-GYBYL2SQ4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 


export { analytics, app, db, collection, addDoc, Timestamp, getDocs,doc, updateDoc,orderBy, query,deleteDoc,getDoc };