import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyBgFy4tdmlWMaKjr0ltJhdMie0C8FzArKA",
  authDomain: "noteapp-26512.firebaseapp.com",
  projectId: "noteapp-26512",
  storageBucket: "noteapp-26512.appspot.com",
  messagingSenderId: "236472237969",
  appId: "1:236472237969:web:e5970b885d5b685ebee430"
});

const FIREBASE = firebase;

export default FIREBASE;