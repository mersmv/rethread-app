// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';
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

export const storage = getStorage(app);
