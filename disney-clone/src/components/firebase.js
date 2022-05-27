import firebase from 'firebase'

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

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { provider, auth, storage };
export default db;
