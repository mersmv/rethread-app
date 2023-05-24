import { useContext } from 'react';
import { AuthContext } from '../../config/firebase.config';
import BannerUser from '../BannerUser/BannerUser';

const Banner = () => {
	const { currentUser } = useContext(AuthContext);

	if (!currentUser) return <h1>Loading...</h1>;
	return (
		<>
			{!currentUser && <h1>hola</h1>}
			{currentUser && <BannerUser />}
		</>
	);
};

export default Banner;
