import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZT_675t47LMR_cUYMxb25tzt6f7gyDCc",
  authDomain: "crwn-clthg-db.firebaseapp.com",
  projectId: "crwn-clthg-db",
  storageBucket: "crwn-clthg-db.appspot.com",
  messagingSenderId: "33337408062",
  appId: "1:33337408062:web:af79298cb4a4d5f666af6f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot= await getDoc(userDocRef);

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createAt
        });
    } catch (error) {
        console.log('error creating the user', error.message);
    }
  }

return userDocRef;
};
