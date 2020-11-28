import firebase from "firebase";
import "firebase/firestore";

// TODO: create env vars for this
let config = {
    apiKey: "AIzaSyC4Rg3tNIfetc10tpfTQaJ5Z7OmorDq-KA",
    authDomain: "tedxcmu-firebase.firebaseapp.com",
    databaseURL: "https://tedxcmu-firebase.firebaseio.com",
    projectId: "tedxcmu-firebase",
    storageBucket: "tedxcmu-firebase.appspot.com",
    messagingSenderId: "763268419871",
    appId: "1:763268419871:web:7ed1bdccbe436faf75a02a"
};

firebase.default.initializeApp(config);

export default firebase.firestore();