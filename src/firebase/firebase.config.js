import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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

export default firebase; 