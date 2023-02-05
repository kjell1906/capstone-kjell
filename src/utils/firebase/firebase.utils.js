// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_a1HDyB6GlWM-QjGpiJwuqJfh8_FVY1w",
  authDomain: "crwn-db-f9ac9.firebaseapp.com",
  projectId: "crwn-db-f9ac9",
  storageBucket: "crwn-db-f9ac9.appspot.com",
  messagingSenderId: "1060499788408",
  appId: "1:1060499788408:web:6ee2dfcc6873ddc311138d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
