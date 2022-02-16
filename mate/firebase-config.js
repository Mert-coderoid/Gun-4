import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCUJifqhd_9kNQMI8ckDc7a5vMNqz6-Wg",
    authDomain: "mahmood-5fe81.firebaseapp.com",
    projectId: "mahmood-5fe81",
    storageBucket: "mahmood-5fe81.appspot.com",
    messagingSenderId: "128763229261",
    appId: "1:128763229261:web:6f11c2246c0cad731d5804",
    measurementId: "G-M0GP0R8C7H"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}


const fireStore = firebase.firestore();
const auth = firebase.auth();

export { fireStore, auth };