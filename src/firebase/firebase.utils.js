import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1px37Ms2tXpai8iEfUI2yw3WoIlVEcqo",
    authDomain: "booksregister-4532d.firebaseapp.com",
    databaseURL: "https://booksregister-4532d.firebaseio.com",
    projectId: "booksregister-4532d",
    storageBucket: "booksregister-4532d.appspot.com",
    messagingSenderId: "427138320160",
    appId: "1:427138320160:web:ad73957f283970a6d67945",
    measurementId: "G-RTB96M0XZ1"
};

firebase.initializeApp(firebaseConfig);

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