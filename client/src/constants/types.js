import {
	accesoriesCollectionReference,
	clothesCollectionReference,
	shoesCollectionReference
} from '../config/firebase.config';

export const SELECT_TYPES = [
	{
		value: 'clothes',
		text: 'Ropa'
	},
	{
		value: 'shoes',
		text: 'Zapatos'
	},
	{
		value: 'accesories',
		text: 'Accesorios'
	}
];

export const TYPES = {
	clothes: {
		refDatabase: clothesCollectionReference
	},
	shoes: {
		refDatabase: shoesCollectionReference
	},
	accesories: {
		refDatabase: accesoriesCollectionReference
	}
};
