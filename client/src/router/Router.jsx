import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Register from '../pages/Register/Register';
import Login from '../pages/LogIn/LogIn';
import Home from '../pages/Home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home></Home>}></Route>
				<Route path='register' element={<Register />}></Route>
				<Route path='login' element={<Login />}></Route>
			</Route>
		</Routes>
	);
};

export default Router;
