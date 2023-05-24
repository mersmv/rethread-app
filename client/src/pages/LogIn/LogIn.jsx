import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup
} from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase.config';
import {
	GoogleLogo,
	StyledContainer,
	StyledInput,
	StyledLabel,
	SubmitButton,
	StyledButton
} from './styles';

const Login = () => {
	const [error, setError] = useState('');
	const [userLogin, setUserLogin] = useState({
		email: '',
		password: ''
	});
	return (
		<StyledContainer>
			<form onSubmit={e => handleSubmit(e, userLogin, setError)}>
				<StyledLabel htmlFor=''>
					Email:
					<StyledInput
						type='text'
						onChange={e =>
							setUserLogin({ ...userLogin, email: e.target.value })
						}
					/>
				</StyledLabel>
				<StyledLabel htmlFor=''>
					Contraseña:
					<StyledInput
						type='password'
						onChange={e =>
							setUserLogin({ ...userLogin, password: e.target.value })
						}
					/>
				</StyledLabel>
				<StyledButton onClick={() => LoginWithGoogle()}>
					<GoogleLogo
						src='../../../public/assets/images/gogle-logo.png'
						alt=''
					/>
					Inicia sesion con google
				</StyledButton>
				<SubmitButton type='submit' />
			</form>
		</StyledContainer>
	);
};

const handleSubmit = async (e, userLogin, setError) => {
	e.preventDefault();
	const { email, password } = userLogin;
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		setError('Falló el mail o la contraseña');
	}
};

const LoginWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (err) {
		console.log(err);
	}
};
export default Login;
