import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyCktWBWGtDfrwRaXpEUi9jD20_LWxDiD0g',
    authDomain: 'tedxcmu-global-narratives.firebaseapp.com',
    databaseURL: 'https://tedxcmu-firebase.firebaseio.com',
    projectId: 'tedxcmu-global-narratives',
    storageBucket: 'tedxcmu-global-narratives.appspot.com',
    messagingSenderId: '703306085648',
    appId: '1:703306085648:web:6962b3f57df280145b6195',
};

export default firebase.default.initializeApp(config);

export const firestore = firebase.firestore();
