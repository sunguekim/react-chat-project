import firebase from "firebase";

import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
    apiKey: "REACT_APP_FIREBASE_KEY",
    authDomain: "react-chat-dc9bf.firebaseapp.com",
    databaseURL: "https://react-chat-dc9bf-default-rtdb.firebaseio.com",
    projectId: "react-chat-dc9bf",
    storageBucket: "react-chat-dc9bf.appspot.com",
    messagingSenderId: "551600747146",
    appId: "1:551600747146:web:31be7cf7d84625a48c7373",
    measurementId: "G-25FJEPMZDT"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
