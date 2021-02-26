// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDvsrfKo0fC-4tflJBmEdGIBjLtw1SCrMA",
    authDomain: "whatsapp-clone-708cc.firebaseapp.com",
    projectId: "whatsapp-clone-708cc",
    storageBucket: "whatsapp-clone-708cc.appspot.com",
    messagingSenderId: "535481392030",
    appId: "1:535481392030:web:f6275cdc0e22b717bed48f",
    measurementId: "G-F68JTZXG4H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export{auth, provider};
export default db;