import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZDFFjQUnHg_ihvYw8BuyRiWc-x1mxSGk",
  authDomain: "disneyplus-clone-eaccc.firebaseapp.com",
  projectId: "disneyplus-clone-eaccc",
  storageBucket: "disneyplus-clone-eaccc.appspot.com",
  messagingSenderId: "450344378252",
  appId: "1:450344378252:web:4c79bdb4c9095b63ee40a9",
  measurementId: "G-D3S2WD31X0",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { provider, auth, storage };
export default db;
