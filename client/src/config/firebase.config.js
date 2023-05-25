// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDi89GPgXV3__LJrqXXgcrJDswG7cCzr2E',
	authDomain: 'rethread-web.firebaseapp.com',
	projectId: 'rethread-web',
	storageBucket: 'rethread-web.appspot.com',
	messagingSenderId: '470865545672',
	appId: '1:470865545672:web:2e93d1462e804f3547d8fd',
	measurementId: 'G-9LN31TRX7H'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Autentificar los datos
export const auth = getAuth(app);
//Crear un contexto
export const AuthContext = createContext();

//Añadimos todas las colecciones
const db = getFirestore(app);
export const clothesCollectionReference = collection(db, 'clothes');
export const shoesCollectionReference = collection(db, 'shoes');
export const accesoriesCollectionReference = collection(db, 'accesories');

export const storage = getStorage(app);
