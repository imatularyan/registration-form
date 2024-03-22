// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATAa0609hUnU8Q6mj9t_qsSLcRGBNxyHw",
  authDomain: "focus-champion-408308.firebaseapp.com",
  projectId: "focus-champion-408308",
  storageBucket: "focus-champion-408308.appspot.com",
  messagingSenderId: "375963064388",
  appId: "1:375963064388:web:a0e9450e697ef7bbd14411",
  measurementId: "G-Z5WMCEE3SD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
