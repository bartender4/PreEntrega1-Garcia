import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyCGVuJp3CevYOZ2gTvLMvQl7pP062uWxdI",
  authDomain: "reacfirebaserecopados.firebaseapp.com",
  projectId: "reacfirebaserecopados",
  storageBucket: "reacfirebaserecopados.appspot.com",
  messagingSenderId: "251991011152",
  appId: "1:251991011152:web:912414a8b5142a87ca0655",
  measurementId: "G-2ZDNWS3RFZ"
};

const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

