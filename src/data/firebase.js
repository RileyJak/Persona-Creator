import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu0BKzHeQKIXhR4-GXh1YKRMjMX3ayfs0",
  authDomain: "personas-40369.firebaseapp.com",
  databaseURL: "https://personas-40369.firebaseio.com",
  projectId: "personas-40369",
  storageBucket: "personas-40369.appspot.com",
  messagingSenderId: "1067005051385",
  appId: "1:1067005051385:web:a456c62f1f081775bffd28",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const moviesCollection = db.collection("personas");

export default db;
export { personas };
