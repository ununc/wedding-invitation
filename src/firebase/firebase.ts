import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCw5f6Bxfe0V7rRA-DE5kLpRE0SQ9MqfLc',
  databaseURL: 'https://wedding-invitation-916e2-default-rtdb.firebaseio.com',
  projectId: 'wedding-invitation-916e2',
  storageBucket: 'wedding-invitation-916e2.appspot.com',
  messagingSenderId: '286449501156',
  appId: '1:286449501156:web:46f75f3a797f121792fdf1',
};

const app = firebase.initializeApp(firebaseConfig);
export const database = app.database();
