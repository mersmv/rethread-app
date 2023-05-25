import { FORM_VALIDATIONS, validatePassword } from '../../constants/forms';
import { handleUploadPic } from '../../constants/uploadfiles';
import { useForm } from 'react-hook-form';
import {
	SpanWarning,
	StyledContainer,
	StyledInput,
	StyledLabel,
	StyledTitle,
	SubmitButton
} from './styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues
	} = useForm();

	return (
		<StyledContainer>
			<StyledTitle>¡Regístrate con nosotros!</StyledTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<StyledLabel htmlFor='name'>
					Nombre:
					<StyledInput
						type='text'
						name='name'
						id='name'
						{...register('name', {
							required: FORM_VALIDATIONS['name'].require,
							pattern: {
								value: FORM_VALIDATIONS['name'].pattern,
								message: FORM_VALIDATIONS['name'].message
							}
						})}
					/>
					<SpanWarning>{errors?.name?.message}</SpanWarning>
				</StyledLabel>

				<StyledLabel htmlFor='email'>
					Email:
					<StyledInput
						type='text'
						id='email'
						name='email'
						{...register('email', {
							required: FORM_VALIDATIONS['email'].require,
							pattern: {
								value: FORM_VALIDATIONS['email'].pattern,
								message: FORM_VALIDATIONS['email'].message
							}
						})}
					/>
					<SpanWarning>{errors?.email?.message}</SpanWarning>
				</StyledLabel>
				<StyledLabel htmlFor='username'>
					Usuario:
					<StyledInput
						type='text'
						id='username'
						name='username'
						{...register('username', {
							required: FORM_VALIDATIONS['username'].require,
							pattern: {
								value: FORM_VALIDATIONS['username'].pattern,
								message: FORM_VALIDATIONS['username'].message
							}
						})}
					/>
					<SpanWarning>{errors?.username?.message}</SpanWarning>
				</StyledLabel>
				<StyledLabel htmlFor='password'>
					Contraseña:
					<StyledInput
						type='password'
						name='password'
						id='password'
						{...register('password', {
							required: FORM_VALIDATIONS['password'].require,
							pattern: {
								value: FORM_VALIDATIONS['password'].pattern,
								message: FORM_VALIDATIONS['password'].message
							}
						})}
					/>
					<SpanWarning>{errors?.password?.message}</SpanWarning>
				</StyledLabel>
				<StyledLabel htmlFor='repeatPassword'>
					Repite la contraseña:
					<StyledInput
						type='password'
						name='repeatPassword'
						id='repeatPassword'
						{...register('repeatPassword', {
							required: FORM_VALIDATIONS['repeatPassword'].require,
							pattern: {
								value: FORM_VALIDATIONS['repeatPassword'].pattern,
								message: FORM_VALIDATIONS['repeatPassword'].message
							},
							validate: value => validatePassword(value, getValues)
						})}
					/>
					<SpanWarning>{errors?.repeatPassword?.message}</SpanWarning>
				</StyledLabel>
				<StyledLabel htmlFor='file'>
					Foto de perfil:
					<input
						type='file'
						name='file'
						id='file'
						onChange={e => handleUploadPic(e.target.files)}
					/>
				</StyledLabel>
				<SubmitButton type='submit' />
			</form>
		</StyledContainer>
	);
};

const onSubmit = async data => {
	console.log(data);
	try {
		await createUserWithEmailAndPassword(auth, data.email, data.password);
	} catch (err) {
		console.log(err);
	}
};
export default Register;
