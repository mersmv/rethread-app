import { FORM_VALIDATIONS } from '../../constants/forms';
import { handleUploadPic } from '../../constants/uploadfiles';
import { useForm } from 'react-hook-form';
import { StyledContainer, StyledLabel, StyledLegend } from './styles';

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	return (
		<StyledContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<StyledLabel htmlFor='name'>
					Nombre:
					<input
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
					<span>{errors?.name?.message}</span>
				</StyledLabel>

				<StyledLabel htmlFor='email'>
					Email:
					<input
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
					<span>{errors?.email?.message}</span>
				</StyledLabel>
				<StyledLabel htmlFor='username'>
					Usuario:
					<input
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
					<span>{errors?.username?.message}</span>
				</StyledLabel>
				<StyledLabel htmlFor='password'>
					Contraseña:
					<input
						type='text'
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
				</StyledLabel>
				<StyledLegend>Ciudad:</StyledLegend>
				<select name='' id=''>
					<option value='Madrid'>Madrid</option>
					<option value='Barcelona'>Barcelona</option>
					<option value='Sevilla'>Sevilla</option>
					<option value='Valencia'>Valencia</option>
					<option value='Malaga'>Málaga</option>
				</select>
				<StyledLabel htmlFor=''>
					<input
						type='file'
						name=''
						id=''
						onChange={e => handleUploadPic(e.target.files)}
					/>
				</StyledLabel>
				<input type='submit' />
			</form>
		</StyledContainer>
	);
};

const onSubmit = async data => {
	if (data.password != data.confirmPassword) return;
	try {
		//await createUserWithEmailAndPassword(auth, data.email, data.password);
	} catch (err) {
		console.log(error);
	}
};
export default Register;
