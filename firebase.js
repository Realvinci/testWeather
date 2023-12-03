// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3by-puXrx_9c8aLN-Whj4W70p6aG9DyY",
  authDomain: "weatherstation-23035.firebaseapp.com",
  projectId: "weatherstation-23035",
  storageBucket: "weatherstation-23035.appspot.com",
  messagingSenderId: "19888683323",
  appId: "1:19888683323:web:a3e7fd54d07113f189df1e",
  measurementId: "G-RBQSJ9J6VH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
