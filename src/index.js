import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2D59Dyld3pQbtPd9GWCX58VgbmcamH7Q",
    authDomain: "cart-f4400.firebaseapp.com",
    projectId: "cart-f4400",
    storageBucket: "cart-f4400.appspot.com",
    messagingSenderId: "245725935970",
    appId: "1:245725935970:web:3a29ba491071a29748543b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  
    <App />,
    document.getElementById('root')
);
//serviceWorker.unregister();