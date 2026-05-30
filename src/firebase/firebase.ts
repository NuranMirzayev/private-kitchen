export {}
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDlKj0noEMFk_yIVGuD6An-2KdA_9PredM',
	authDomain: 'private-kitchen-2d49c.firebaseapp.com',
	projectId: 'private-kitchen-2d49c',
	storageBucket: 'private-kitchen-2d49c.firebasestorage.app',
	messagingSenderId: '614880452101',
	appId: '1:614880452101:web:cf899cdaa337ab3340c66c',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
