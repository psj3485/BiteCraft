/**
 * BiteCraft - Firebase Configuration & SDK Initialization
 * Project: bitecraft-b57c0
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

// Web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDJnZ79D1PWD8rIdQAfp97s6HTGlzD0xdM",
  authDomain: "bitecraft-b57c0.firebaseapp.com",
  projectId: "bitecraft-b57c0",
  storageBucket: "bitecraft-b57c0.firebasestorage.app",
  messagingSenderId: "701757523562",
  appId: "1:701757523562:web:cd31c03e05512f64212c13",
  measurementId: "G-VB171K2JWW"
};

// Initialize Core App & Services
export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  logEvent,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp
};

