import firebase from 'firebase/app';
import "firebase/storage"
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAV4vWxaBjd1Sve30vlX_TG8gykBcmBon0",
    authDomain: "caixanotas.firebaseapp.com",
    projectId: "caixanotas",
    storageBucket: "caixanotas.appspot.com",
    messagingSenderId: "320404192679",
    appId: "1:320404192679:web:9cc90f99ef96577e3b0a82",
    measurementId: "G-QMDK8H5T9K"
  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default database;