import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledButton = styled(Link)`
	width: 80px;
	height: 30px;
	border-radius: 20px;
	font-size: 0.9rem;
	background-color: ${({ color }) => color};
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { StyledButton };
