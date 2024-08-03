import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  set,
  onValue,
  remove,
  update,
} from 'firebase/database';
import {
  getStorage,
  ref as stRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  listAll,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBt9MOKDZ9HdvRQzrqKY5hveDxTbsr7uUM',
  authDomain: 'airforshare-react.firebaseapp.com',
  projectId: 'airforshare-react',
  storageBucket: 'airforshare-react.appspot.com',
  messagingSenderId: '214961909742',
  appId: '1:214961909742:web:b0303f4052f899665968ff',
  databaseURL:
    'https://airforshare-react-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {
  database,
  ref,
  set,
  onValue,
  remove,
  update,
  // Storage
  getStorage,
  stRef,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
  listAll,
};
