import { useEffect, useState } from 'react';
import { AuthContext, auth } from '../config/firebase.config';

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log('Usuario autenticado', user);
				setCurrentUser(user);
			} else {
				console.log('Usuario no autenticado');
				setCurrentUser(null);
			}
		});
		return () => unsuscribe();
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
