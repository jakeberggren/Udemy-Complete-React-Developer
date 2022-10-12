import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAo4jYnz3VSiwAhSWs0vrwrGKRiIResFtE',
  authDomain: 'crwn-clothing-db-244c8.firebaseapp.com',
  projectId: 'crwn-clothing-db-244c8',
  storageBucket: 'crwn-clothing-db-244c8.appspot.com',
  messagingSenderId: '4987765135',
  appId: '1:4987765135:web:fd891805b54b46f0bb8bfa',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
