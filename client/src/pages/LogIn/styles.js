import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledContainer = styled.div`
	margin-top: 45px;
	width: 45%;
	padding: 25px;
	border-radius: 20px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: ${COLORS.secondaryLight};
`;

const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-left: 5px;
	font-size: 0.9rem;
	margin-bottom: 20px;
`;

const StyledInput = styled.input`
	height: 30px;
	border-radius: 10px;
	border: solid 1px transparent;
`;

const SubmitButton = styled.input`
	margin-top: 20px;
	width: 150px;
	height: 30px;
	background-color: ${COLORS.secondaryDark};
	border-radius: 20px;
	border: 1px solid transparent;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	cursor: pointer;
	justify-content: center;
	color: white;
`;

const StyledButton = styled.button`
	width: 300px;
	height: 35px;
	margin-left: auto;
	margin-right: auto;
	background-color: ${COLORS.secondaryDark};
	border: 1px solid transparent;
	border-radius: 15px;
	display: flex;
	padding-left: 15px;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: white;
`;

const GoogleLogo = styled.img`
	width: 20px;
	margin-right: 10px;
`;
export {
	StyledContainer,
	StyledLabel,
	StyledInput,
	SubmitButton,
	StyledButton,
	GoogleLogo
};
