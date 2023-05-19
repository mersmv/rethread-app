import { FORM_VALIDATIONS } from '../../constants/forms';
import { handleUploadPic } from '../../constants/uploadfiles';
import { useForm } from 'react-hook-form';

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	return (
		<div>
			<form action='' onSubmit={e => handleSubmit(onSubmit)}>
				<label htmlFor='name'>
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
				</label>

				<label htmlFor='email'>
					Email:
					<input
						type='text'
						id='email'
						name='mail'
						{...register('name', {
							required: FORM_VALIDATIONS['email'].require,
							pattern: {
								value: FORM_VALIDATIONS['email'].pattern,
								message: FORM_VALIDATIONS['email'].message
							}
						})}
					/>
					<span>{errors?.name?.message}</span>
				</label>
				<label htmlFor='username'>
					Usuario:
					<input
						type='text'
						id='username'
						name='user'
						{...register('name', {
							required: FORM_VALIDATIONS['username'].require,
							pattern: {
								value: FORM_VALIDATIONS['username'].pattern,
								message: FORM_VALIDATIONS['username'].message
							}
						})}
					/>
					<span>{errors?.name?.message}</span>
				</label>
				<label htmlFor='password'>
					Contraseña:
					<input
						type='text'
						name='password'
						id='password'
						{...register('name', {
							required: FORM_VALIDATIONS['password'].require,
							pattern: {
								value: FORM_VALIDATIONS['password'].pattern,
								message: FORM_VALIDATIONS['password'].message
							}
						})}
					/>
				</label>
				<label htmlFor='conformPassword'>
					Repite la contraseña:
					<input type='text' name='confirmPassword' />
				</label>
				<legend>Ciudad:</legend>
				<select name='' id=''>
					<option value='Madrd'>Madrid</option>
					<option value='Barcelona'>Barcelona</option>
					<option value='Sevilla'>Sevilla</option>
					<option value='Valencia'>Valencia</option>
					<option value='Malaga'>Málaga</option>
				</select>
				<label htmlFor=''>
					<input
						type='file'
						name=''
						id=''
						onChange={e => handleUploadPic(e.target.files)}
					/>
				</label>
				<input type='submit' />
			</form>
		</div>
	);
};

const onSubmit = async (data, e) => {
	e.preventDefault();
	if (data.password !== data.confirmPassword) {
		return console.log('No coinciden las contraseñas');
	}
	try {
		await createUserWithEmailAndPassword(data);
	} catch (err) {
		console.log('error');
	}
};
export default Register;
