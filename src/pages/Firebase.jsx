// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS_OvBUiTb8xKoNrEJZvOOguVfsXZ4S5Y",
  authDomain: "auth-08-09-06.firebaseapp.com",
  projectId: "auth-08-09-06",
  storageBucket: "auth-08-09-06.firebasestorage.app",
  messagingSenderId: "160995066281",
  appId: "1:160995066281:web:2659a35065fc49d42804b8",
  measurementId: "G-BFH7SFTGMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;