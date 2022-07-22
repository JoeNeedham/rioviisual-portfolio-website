// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseApp = {
    apiKey: "AIzaSyC2B5Ue9eGv4U-GBdJE_1yxo_DkoPjhkoI",
    authDomain: "contactform-23cdb.firebaseapp.com",
    projectId: "contactform-23cdb",
    storageBucket: "contactform-23cdb.appspot.com",
    messagingSenderId: "156834702572",
    appId: "1:156834702572:web:36e0963d72f599e61bb1c9"
};

const app = initializeApp(firebaseApp);

const db = getFirestore(app)

export { db }