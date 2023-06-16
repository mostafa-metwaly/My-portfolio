import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAInVOHFIc-BM-jZ2QjeuHfEV30q0_vrfQ",
  authDomain: "website-2a4c8.firebaseapp.com",
  projectId: "website-2a4c8",
  storageBucket: "website-2a4c8.appspot.com",
  messagingSenderId: "712723569132",
  appId: "1:712723569132:web:1c2cb08b3a6df39b8288c9",
  measurementId: "G-PR3Q92Z27H"
};

var firebaseapp = null;

if (!firebase.apps.length) {
  firebaseapp = firebase.initializeApp(config);
} else {
  firebaseapp = firebase.app(); // if already initialized, use that one
}

const projectStorage = firebaseapp.storage();
const projectFirestore = firebaseapp.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
const auth = firebase.auth();
const persistance = firebase.auth.Auth.Persistence.NONE;

export { projectStorage, projectFirestore, timeStamp, auth, persistance };
