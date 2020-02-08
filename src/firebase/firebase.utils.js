import firebase from './firebase.config';

const firestore = firebase.firestore();

  export const createBookDocument = async (book) => {
    const {  image, title, author, language, rating  } = book;
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
              language, 
              rating
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



export default firebase;