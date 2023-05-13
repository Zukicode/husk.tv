import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDNmVKQzC_vnaSCmk2eI4lilcMtMjtqHuY',
	authDomain: 'husk-movie.firebaseapp.com',
	projectId: 'husk-movie',
	storageBucket: 'husk-movie.appspot.com',
	messagingSenderId: '64104145746',
	appId: '1:64104145746:web:d6f4029b51c14f1294108b',
	measurementId: 'G-LEFYXMX8Q6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
