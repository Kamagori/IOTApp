import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MeuStackNavigator from './StackNavigator';
import Menu from './src/pages/Menu/index';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <NavigationContainer>
      <MeuStackNavigator />
    </NavigationContainer>
  );
};

export default App;

