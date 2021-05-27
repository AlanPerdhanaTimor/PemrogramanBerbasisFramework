import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB45RJMx--Uu0T9m3huHkWYbfhodJmtrZY",
    authDomain: "yeeee-3299a.firebaseapp.com",
    projectId: "yeeee-3299a",
    storageBucket: "yeeee-3299a.appspot.com",
    messagingSenderId: "479728845654",
    appId: "1:479728845654:web:c69710778022fbb54a8cf7",
    measurementId: "G-WMCQH3NVJ0"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
