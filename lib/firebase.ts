import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../firebase-applet-config.json";

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firestoreDatabaseId =
  "firestoreDatabaseId" in firebaseConfig ? String(firebaseConfig.firestoreDatabaseId) : "";

export const db = firestoreDatabaseId ? getFirestore(app, firestoreDatabaseId) : getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
