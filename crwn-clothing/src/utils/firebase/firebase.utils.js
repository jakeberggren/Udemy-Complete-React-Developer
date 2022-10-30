import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.messsage);
    }

    return userDocRef;
  }

  //if user data exists

  //if user data does not exist
  //create / set the document with the data from userAuth in my collection.

  // return user doc ref
};
