import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { key } from "./secret";

const firebaseConfig = {
  apiKey: key.apiKey,
  authDomain: key.authDomain,
  projectId: key.projectId,
  storageBucket: key.storageBucket,
  messagingSenderId: key.messagingSenderId,
  appId: key.appId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;
