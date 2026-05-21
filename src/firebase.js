// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "ISI_API_KEY_KAMU",
  authDomain: "ISI_AUTH_DOMAIN",
  projectId: "ISI_PROJECT_ID",
  storageBucket: "ISI_STORAGE_BUCKET",
  messagingSenderId: "ISI_SENDER_ID",
  appId: "ISI_APP_ID"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)