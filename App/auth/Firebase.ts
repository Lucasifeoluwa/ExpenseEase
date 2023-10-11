// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5ATgJib4Y62kFb6qa-eI0ik0GieA_2Zo",
  authDomain: "expenseease-d99d9.firebaseapp.com",
  projectId: "expenseease-d99d9",
  storageBucket: "expenseease-d99d9.appspot.com",
  messagingSenderId: "308907290761",
  appId: "1:308907290761:web:a64dc8c1a4871285e2d658",
  measurementId: "G-LMTN3313S4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
