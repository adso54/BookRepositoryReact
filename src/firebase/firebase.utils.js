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


  export const createBookDocument = async (book, additionalData) => {
    const {  image, title, author  } = book;
    const file = image;
    const storageRef = firebase.storage().ref();
    const fileName = Date() + '_' + file.name;

    var uploadTask = storageRef.child(`images/${fileName}`).put(file);

    const status = {
      imageUrl: null,
      error: null,
      progress: 0,
      status: 0
    }

    const bookRef = firestore.collection('books');
      
    const snapShot = await bookRef.get();
    uploadTask.on('state_changed', function(snapshot){
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      status.progress = progress;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
        default: break;
      }
    }, function(error) {
        status.error = error;
    }, function() {
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        console.log(book)
        if (!book) return;
        if (!snapShot.exists) {
          try {
             bookRef.add({
              title,
              author,
              imageurl: downloadURL,
              ...additionalData
            });
            
          } catch (error) {
            console.log('error creating book', error.message);
          }
        }
      });
    });

    return bookRef;
  };

  export const  getAllBooks = async  () => { 
    const books = [];
    ( await firestore.collection("books").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
         const book = {id: doc.id, ...doc.data()};
          books.push(book);
         
      });
  })
  )
  return books
}

export const getBookById = async (id) => {
  const bookRef = await firestore.collection("books").doc(id)
  var retBook = {}
  await bookRef.get().then(async (book) => {
    if(book.exists) {
      retBook = book.data(); 
    }
  }).catch(function(error){
      console.log( error)
  })
  return retBook;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;