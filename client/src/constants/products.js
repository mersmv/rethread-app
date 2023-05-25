const messages = {
	price: 'El precio es obligatorio',
	size: 'La talla es obligatoria',
	brand: 'La marca es obligatoria',
	name: 'El nombre es obligatorio',
	patterns: 'El precio debe ser un valor valido'
};

const patterns = {
	price: /^\$?\d+(,\d{3})*(\.\d{2})?$/
};

export const PRODUCTS_VALIDATIONS = {
	price: {
		require: messages.price,
		pattern: patterns.price,
		message: messages.patterns
	},
	size: {
		require: messages.size
	},
	brand: {
		require: messages.brand
	},
	name: {
		require: messages.name
	}
};
