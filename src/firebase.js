import firebase from 'firebase';

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
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
