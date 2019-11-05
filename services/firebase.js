import firebase from "firebase/app";
import "firebase/auth";

var config = {
    apiKey: "AIzaSyAfUlcx6L4N9AHztNB3ncWIwMnSsWiPbCo",
    authDomain: "nuxt-test-app-258011.firebaseapp.com",
    databaseURL: "https://nuxt-test-app-258011.firebaseio.com",
    projectId: "nuxt-test-app-258011",
    storageBucket: "nuxt-test-app-258011.appspot.com",
    messagingSenderId: "682371549437",
    appId: "1:682371549437:web:6c8edc368ecba5ce4bd694",
    measurementId: "G-RDLWVR403X"
  };
  
  !firebase.apps.length ? firebase.initializeApp(config) : "";

  export const auth = firebase.auth();
