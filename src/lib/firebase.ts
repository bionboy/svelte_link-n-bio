// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB5lIWCNnauakbW7cC3k3EVouadDXjDUbo',
	authDomain: 'svelte-link-in-bio.firebaseapp.com',
	projectId: 'svelte-link-in-bio',
	storageBucket: 'svelte-link-in-bio.appspot.com',
	messagingSenderId: '997872133834',
	appId: '1:997872133834:web:15ec2d533f748f99c3f633',
	measurementId: 'G-DDFH3DQFY5'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
