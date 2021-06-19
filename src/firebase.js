import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyAtWvUboy3eIdTnFtxTB8oIYqpSN2hsFRw',
    authDomain: 'tedxcmu-narratives.firebaseapp.com',
    databaseURL: 'https://tedxcmu-narratives.firebaseio.com',
    projectId: 'tedxcmu-narratives',
    storageBucket: 'tedxcmu-narratives.appspot.com',
    messagingSenderId: '1014665372052',
    appId: '1:1014665372052:web:fe5ec8b36117780b3eaf81',
};

export default firebase.default.initializeApp(config);

export const firestore = firebase.firestore();
