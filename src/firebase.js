import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-jppHL9DCR968L5g83en7BtFdyqafuNo",
  authDomain: "auth-75468.firebaseapp.com",
  projectId: "auth-75468",
  storageBucket: "auth-75468.appspot.com",
  messagingSenderId: "1007558959064",
  appId: "1:1007558959064:web:adffc441abdf5183c51cad",
  measurementId: "G-CVV8B6PFQ2",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
