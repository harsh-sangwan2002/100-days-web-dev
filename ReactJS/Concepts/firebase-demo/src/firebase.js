// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "fir-demo-9444a.firebaseapp.com",
    projectId: "fir-demo-9444a",
    storageBucket: "fir-demo-9444a.appspot.com",
    messagingSenderId: "819725112777",
    appId: "1:819725112777:web:27684bd2591ee30a094418"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users')
}

export const storage = firebase.storage();