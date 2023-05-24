import { useContext } from 'react';
import { AuthContext } from '../../config/firebase.config';
import HeaderNoUser from '../HeaderNoUser/HeaderNoUser';
import HeaderUser from '../HeaderUser/HeaderUser';

const Header = () => {
	const { currentUser } = useContext(AuthContext);

	if (!currentUser) return <h1>Loading...</h1>;

	return (
		<>
			{!currentUser && <HeaderNoUser />}
			{currentUser && <HeaderUser />}
		</>
	);
};

export default Header;
