// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa5UieDXDMzXj-GZPemWCn-oBmKJRQEhQ",
  authDomain: "react-dragon-news-auth-8d70d.firebaseapp.com",
  projectId: "react-dragon-news-auth-8d70d",
  storageBucket: "react-dragon-news-auth-8d70d.appspot.com",
  messagingSenderId: "685848363291",
  appId: "1:685848363291:web:86e73fdc42fb2f664293be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;