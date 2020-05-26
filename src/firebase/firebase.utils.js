import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrhaEFy2zQJQ9WWvUPwhffQi0HZxVGQ3w",
    authDomain: "ecom-db-84353.firebaseapp.com",
    databaseURL: "https://ecom-db-84353.firebaseio.com",
    projectId: "ecom-db-84353",
    storageBucket: "ecom-db-84353.appspot.com",
    messagingSenderId: "296656497613",
    appId: "1:296656497613:web:cb5cb5e67fd19240f8f284",
    measurementId: "G-CJT10B10W2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;