import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Register from '../pages/Register/Register';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='register' element={<Register />}></Route>
			</Route>
		</Routes>
	);
};

export default Router;
