// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import these for Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeA-Qzg3rq3JmNusQhGqFHex8M2UUDiGk",
  authDomain: "login-46d14.firebaseapp.com",
  projectId: "login-46d14",
  storageBucket: "login-46d14.appspot.com",
  messagingSenderId: "542761120947",
  appId: "1:542761120947:web:1083a6b237c38bae5b6cc6",
  measurementId: "G-9GVPFWQTY0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app); // Export the auth variable
export const provider = new GoogleAuthProvider(); // Export the provider variable
