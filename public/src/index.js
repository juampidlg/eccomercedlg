import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  /*apiKey: "AIzaSyBibvk47HaMXQ4sKdNp7nvRxpe9NfEYGVs",
  authDomain: "ecommerce-dlg.firebaseapp.com",
  projectId: "ecommerce-dlg",
  storageBucket: "ecommerce-dlg.appspot.com",
  messagingSenderId: "348725201135",
  appId: "1:348725201135:web:addb1c144d29f5d4eef31a"*/
  apikey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};


export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


