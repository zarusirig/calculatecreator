import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD5jnwyd3DdUj-b0DQM4iCACnBrqOfq_r0",
  authDomain: "tiktokcalculator-9619d.firebaseapp.com",
  projectId: "tiktokcalculator-9619d",
  storageBucket: "tiktokcalculator-9619d.firebasestorage.app",
  messagingSenderId: "52556051249",
  appId: "1:52556051249:web:74ef459080c1edb46e3610",
  measurementId: "G-KNN9QW52GQ",
};

export const app = initializeApp(firebaseConfig);

// Only initialize analytics in the browser
export const analytics = typeof window !== "undefined"
  ? isSupported().then((supported) => (supported ? getAnalytics(app) : null))
  : null;
