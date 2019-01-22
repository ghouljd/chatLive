// Initialize Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// import 'firebase/auth';

const config = {
  apiKey: 'your api key',
  authDomain: 'your auth domain',
  databaseURL: 'your database url',
  projectId: 'your project id',
  storageBucket: 'your storage bucket',
  messagingSenderId: 'your messaging sender id',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

// const storage = firebase.storage();

// const auth = firebase.auth();

export { firebase, firestore /* , storage, auth */ };
