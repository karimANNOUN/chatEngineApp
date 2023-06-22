import { getAuth ,GoogleAuthProvider } from "firebase/auth";
import { getFirestore , collection  } from "firebase/firestore"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDcyrhbHkdyElmdVLGuGVk7fg1L8CxOry0",
  authDomain: "chat-3b568.firebaseapp.com",
  databaseURL: "https://chat-3b568-default-rtdb.firebaseio.com",
  projectId: "chat-3b568",
  storageBucket: "chat-3b568.appspot.com",
  messagingSenderId: "198179198319",
  appId: "1:198179198319:web:1be9da527b232cf3d4849a",
  measurementId: "G-BBYRZM0EJE"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth= getAuth();
export const provider = new GoogleAuthProvider();
export const colRef=collection(db,"message");