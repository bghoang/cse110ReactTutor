import * as firebase from "firebase";

const db = firebase.initializeApp({
  apiKey: "AIzaSyAzU6_dXTxYn2uc8t2kSGL5EomrNFX4CPY",
  authDomain: "cse110firebase-96015.firebaseapp.com",
  databaseURL: "https://cse110firebase-96015.firebaseio.com",
  projectId: "cse110firebase-96015",
  storageBucket: "cse110firebase-96015.appspot.com",
  messagingSenderId: "45579713085",
  appId: "1:45579713085:web:e22bf600f130d847a44854",
  measurementId: "G-3FP0LM958S"
});

export default db;
export const provider2 = new firebase.auth.GoogleAuthProvider();
export const provider = new firebase.auth.FacebookAuthProvider();
