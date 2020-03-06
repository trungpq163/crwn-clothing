import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTtKixSXUXSpo1Dx6wpcHWycEKz-AfRBc",
    authDomain: "crwn-db-9a87a.firebaseapp.com",
    databaseURL: "https://crwn-db-9a87a.firebaseio.com",
    projectId: "crwn-db-9a87a",
    storageBucket: "crwn-db-9a87a.appspot.com",
    messagingSenderId: "1099439634878",
    appId: "1:1099439634878:web:a195440f619be3ebfa21ef",
    measurementId: "G-D1RW9QGNCV"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });
    } catch (error) {
        console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
