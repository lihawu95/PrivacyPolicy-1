import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAysfDMh1OqK_jHrgfYi03MSnQlB6GLa84",
  authDomain: "app-esnyca.firebaseapp.com",
  projectId: "app-esnyca",
  storageBucket: "app-esnyca.appspot.com",
  messagingSenderId: "441116098322",
  appId: "1:441116098322:web:2184cc66037a1766d87dcb",
  measurementId: "G-VXTDWFLRLE",
};

// Ensure the app is initialized only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth
const auth = getAuth(app);


// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { auth, db, storage, collection, addDoc };
