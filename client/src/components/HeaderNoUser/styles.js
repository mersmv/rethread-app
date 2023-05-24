import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledNav = styled.nav`
	width: 100%;
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
	padding: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: ${COLORS.primary};
`;

const StyledLinksContainer = styled.div`
	display: flex;
	gap: 15px;
`;

const StyledLogo = styled.img`
	width: 80px;
`;

const StyledSearch = styled.input`
	width: 200px;
	height: 30px;
	border-radius: 30px;
	padding-left: 40px;
	border: 1px solid transparent;
	position: relative;
`;

const StyledGlassIcon = styled.img`
	font-size: 1rem;
`;

export { StyledNav, StyledLinksContainer, StyledLogo, StyledSearch };
