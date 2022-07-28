// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyCVF6i7vxISxO0MHKPXshBboBb8v6A0CTI",
  authDomain: "reminder-app-vpc.firebaseapp.com",
  projectId: "reminder-app-vpc",
  storageBucket: "reminder-app-vpc.appspot.com",
  messagingSenderId: "322028482756",
  appId: "1:322028482756:web:4cb7f59573dd9b2901d991",
  measurementId: "G-BJJGZZDYT8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;
