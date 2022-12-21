// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI17ANMYk3nFYLUEOXI_ot3lVaZzhwPTM",
  authDomain: "camerax-d6467.firebaseapp.com",
  databaseURL: "https://camerax-d6467-default-rtdb.firebaseio.com",
  projectId: "camerax-d6467",
  storageBucket: "camerax-d6467.appspot.com",
  messagingSenderId: "983419940833",
  appId: "1:983419940833:web:90072a9d4b906ab52deca0",
  measurementId: "G-D0NZK0TKTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;