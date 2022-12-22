import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD6BaqKFDUZlLEG5W68GMB7RXxltD2QEds',
  authDomain: 'lorem-ipsum-team-db-22627.firebaseapp.com',
  projectId: 'lorem-ipsum-team-db-22627',
  storageBucket: 'lorem-ipsum-team-db-22627.appspot.com',
  messagingSenderId: '561545940839',
  appId: '1:561545940839:web:4ae3c6c28bc3dbb05a29c2',
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
