import { v4 } from 'uuid';
import { getDownloadURL, uploadBytes } from 'firebase/storage';

export const handleUploadPic = async file => {
	const { currentUser } = useContext(AuthContext);
	const nameNoExtension = file.name.substring(0, file.name.indexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const directory = currentUser.email;
	const storageref = ref(storage, `${directory}/${finalName}`);
	try {
		const upload = await uploadBytes(storageref, file);
		const imageURL = await getDownloadURL(storageref);
		console.log(upload);
		console.log(imageURL);
	} catch (err) {
		console.error('Error al subir el archivo', err);
	}
};
