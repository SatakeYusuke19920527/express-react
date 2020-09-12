import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAF9A1c_7HxxHg__vB6J6p4z8YXQwun4tA",
    authDomain: "deploy-app-7110f.firebaseapp.com",
    databaseURL: "https://deploy-app-7110f.firebaseio.com",
    projectId: "deploy-app-7110f",
    storageBucket: "deploy-app-7110f.appspot.com",
    messagingSenderId: "160840505107",
    appId: "1:160840505107:web:862a2a1172909baf7aece6",
    measurementId: "G-LTLHS59W1Z"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const providerFacebook = new firebase.auth.FacebookAuthProvider();
  
export default firebase