const messages = {
	name: 'El formato introducido no es el correcto',
	requireName: 'El nombre es obligatorio',
	email: 'Debes introducir una dirección correcta',
	requireEmail: 'El email es obligatorio',
	username: 'El ususario ya existe',
	requireUserName: 'Debes introducir un nombre de usuario',
	requirePassword: 'Introducir la contraseña es obligatorio'
};

const patterns = {
	name: /^[A-Za-z]*$/,
	email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
	username: /^[a-z0-9_]+$/
};

export const FORM_VALIDATIONS = {
	name: {
		require: messages.requireName,
		pattern: patterns.name,
		message: messages.name
	},
	email: {
		require: messages.requireEmail,
		pattern: patterns.email,
		message: messages.email
	},
	username: {
		require: messages.requireUserName,
		pattern: patterns.username,
		message: messages.username
	},
	password: {
		require: messages.requirePassword
	}
};
