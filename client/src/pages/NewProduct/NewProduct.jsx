import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { PRODUCTS_VALIDATIONS } from '../../constants/products';
import {
	StyledContainer,
	StyledInput,
	StyledLabel,
	StyledTitle,
	SubmitButton
} from './styles';
import { SELECT_TYPES, TYPES } from '../../constants/types';

const NewProduct = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	return (
		<StyledContainer>
			<StyledTitle>Añadir producto:</StyledTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<StyledLabel htmlFor='name'>
					Título del articulo:
					<StyledInput
						type='text'
						name='name'
						id='name'
						{...register('name', {
							required: PRODUCTS_VALIDATIONS['name'].name
						})}
					/>
				</StyledLabel>
				<StyledLabel htmlFor='price'>
					Precio:
					<StyledInput
						type='text'
						name='price'
						id='price'
						{...register('price', {
							required: PRODUCTS_VALIDATIONS['price'].price,
							patterns: {
								value: PRODUCTS_VALIDATIONS['price'].pattern,
								message: PRODUCTS_VALIDATIONS['price'].message
							}
						})}
					/>
				</StyledLabel>
				<StyledLabel htmlFor='brand'>
					Marca:
					<StyledInput
						type='text'
						name='brand'
						id='brand'
						{...register('brand', {
							required: PRODUCTS_VALIDATIONS['brand'].brand
						})}
					/>
				</StyledLabel>
				<StyledLabel htmlFor='size'>
					Talla:
					<StyledInput
						type='text'
						name='size'
						id='size'
						{...register('size', {
							required: PRODUCTS_VALIDATIONS['size'].size
						})}
					/>
				</StyledLabel>
				<StyledLabel htmlFor='type'>
					<legend>Tipo:</legend>
					<select name='type' id='type'>
						{SELECT_TYPES.map(op => (
							<option key={v4()} value={op.value}>
								{op.text}
							</option>
						))}
					</select>
				</StyledLabel>
				<StyledLabel htmlFor=''>
					<input type='file' name='' id='' multiple />
				</StyledLabel>
				<SubmitButton type='submit' />
			</form>
		</StyledContainer>
	);
};

const onSubmit = async data => {
	try {
		await addDoc(TYPES[data.type].refDatabase, {
			...data,

			date: new Date.toLocaleString()
		});
	} catch (err) {
		console.log(err);
	}
	e.target.reset();
};

export default NewProduct;
