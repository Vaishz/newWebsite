// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdLndDbFnJMpAxi_FFQFlbkeCQhDIdVFs",
  authDomain: "newloginform-65f52.firebaseapp.com",
  projectId: "newloginform-65f52",
  storageBucket: "newloginform-65f52.appspot.com",
  messagingSenderId: "88135994729",
  appId: "1:88135994729:web:46cb6f779294ba791dc1f8",
  measurementId: "G-YG8NDWHLJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
export default app