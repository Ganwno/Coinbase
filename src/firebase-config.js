import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDoGx8w4wD1fnIdMUx-Kaz8rWAyfQ2gU5c",
  authDomain: "coinbase-c0f7f.firebaseapp.com",
  projectId: "coinbase-c0f7f",
  storageBucket: "coinbase-c0f7f.appspot.com",
  messagingSenderId: "133326117971",
  appId: "1:133326117971:web:2fd70a668980dc9d8d7aa6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);