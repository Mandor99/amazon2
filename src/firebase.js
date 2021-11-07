// import firebase from 'firebase';
import { initializeApp } from "firebase/app"
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
	apiKey: 'AIzaSyCel0uoAz6S6M7oAQsuyuBtJ3xCOPejzfs',
	authDomain: 'clone2-246a7.firebaseapp.com',
	projectId: 'clone2-246a7',
	storageBucket: 'clone2-246a7.appspot.com',
	messagingSenderId: '945120409210',
	appId: '1:945120409210:web:c5ed033076e55d510eedc3',
	measurementId: 'G-C4J98RKNVE',
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp)
export const auth = getAuth();
