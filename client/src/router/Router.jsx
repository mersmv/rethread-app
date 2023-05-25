import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Register from '../pages/Register/Register';
import Login from '../pages/LogIn/LogIn';
import Home from '../pages/Home/Home';
import NewProduct from '../pages/NewProduct/NewProduct';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home></Home>}></Route>
				<Route path='register' element={<Register />}></Route>
				<Route path='login' element={<Login />}></Route>
				<Route path='newproduct' element={<NewProduct />}></Route>
			</Route>
		</Routes>
	);
};

export default Router;
