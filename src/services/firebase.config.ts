import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdL0sb5tRX6YINoxyz23uW2JqKPBJL4EY",
  authDomain: "webcars-28b39.firebaseapp.com",
  projectId: "webcars-28b39",
  storageBucket: "webcars-28b39.appspot.com",
  messagingSenderId: "235200595249",
  appId: "1:235200595249:web:25947e5ae48ba3e5ad9c10",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
