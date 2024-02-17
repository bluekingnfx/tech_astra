// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwK3ZcvbK6HG3vCmymaL7jXNyCYv8AvBw",
  authDomain: "techastradb.firebaseapp.com",
  projectId: "techastradb",
  storageBucket: "techastradb.appspot.com",
  messagingSenderId: "850418229418",
  appId: "1:850418229418:web:5e8a164f9cb57f93f470d3",
  measurementId: "G-2Z30FERFHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app