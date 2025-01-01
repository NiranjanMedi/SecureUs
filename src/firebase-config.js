import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA07UWVqskwKlHBcJyT-1V3VkLgkKG_otI",
  authDomain: "safeus-5f6d0.firebaseapp.com",
  projectId: "safeus-5f6d0",
  storageBucket: "safeus-5f6d0.appspot.com",
  messagingSenderId: "80845354386",
  appId: "1:80845354386:web:747f2dff4cfd3c4a093d4b",
  measurementId: "G-77L98RY21H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);