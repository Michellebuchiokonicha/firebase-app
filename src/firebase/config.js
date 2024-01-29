// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyB9rSX0wzyJL-PUvIf35E1w-heRtwu7_sk",
  authDomain: "mimi-s-firebase-one.firebaseapp.com",
  projectId: "mimi-s-firebase-one",
  storageBucket: "mimi-s-firebase-one.appspot.com",
  messagingSenderId: "19032218332",
  appId: "1:19032218332:web:24b2f3e87055e74ec13219"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };