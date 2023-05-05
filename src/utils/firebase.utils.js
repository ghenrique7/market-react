import { initializeApp } from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdCFD9414KrHjZwaf2LOVr2SCaclBgzvI",
  authDomain: "crwn-clothing-db-28963.firebaseapp.com",
  projectId: "crwn-clothing-db-28963",
  storageBucket: "crwn-clothing-db-28963.appspot.com",
  messagingSenderId: "751687957146",
  appId: "1:751687957146:web:1d38407d2851a83efd3d23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);