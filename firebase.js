import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGAy76OPK7Da0E3QK_COx3EgPFfRW7gLM",
    authDomain: "ez-chat-2.firebaseapp.com",
    projectId: "ez-chat-2",
    storageBucket: "ez-chat-2.appspot.com",
    messagingSenderId: "68536456071",
    appId: "1:68536456071:web:65012c9b9199f6ae1a3922",
    measurementId: "G-P6SCPT14L7"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };