import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledBanner = styled.div`
	width: 100%;
	margin-top: -15px;
`;

const StyledAddBackground = styled.div`
	width: 100%;
	height: 400px;
	background-image: url('../../public/assets/images/banner-loged.jpeg');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledAddProduct = styled.div`
	width: 70%;
	height: 75%;
	background-color: ${COLORS.primary};
	border-radius: 10px;
	padding: 20px;
	padding-left: 40px;
`;

const StyledTitle = styled.h1`
	width: 60%;
	font-size: 2rem;
	line-height: 55px;
`;

const StyledLink = styled.button`
	font-size: 1.1rem;
	width: 200px;
	height: 50px;
	background-color: ${COLORS.secondaryDark};
	border-radius: 30px;
	border: solid 1px transparent;
	color: white;
	cursor: pointer;
`;

export {
	StyledBanner,
	StyledAddBackground,
	StyledAddProduct,
	StyledLink,
	StyledTitle
};
