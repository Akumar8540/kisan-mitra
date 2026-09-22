// Firebase Configuration & Future Integration Point
// ==============================================================================
// FOR SIH PROTOTYPE:
// Currently running on high-reliability LocalStorage Database Mode.
// When your project advances to the next stage or you're ready to connect Cloud Firestore,
// simply provide valid credentials in your .env file!
// ==============================================================================

export const isFirebaseConfigured = () => {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  return Boolean(apiKey && apiKey !== "your_api_key_here" && !apiKey.startsWith("demo-"));
};

// Placeholder Firebase export structure
// When ready to connect real Firebase, uncomment the official SDK initialization below:
/*
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = isFirebaseConfigured() ? initializeApp(firebaseConfig) : null;
export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;
*/

export const getDatabaseMode = () => {
  return isFirebaseConfigured() ? "Cloud Firestore (Live)" : "LocalStorage (Prototype Demo Mode)";
};
