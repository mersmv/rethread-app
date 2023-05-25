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

const StyledTitle = styled.h1`
	font-size: 1.5rem;
	margin-bottom: 40px;
	color: ${COLORS.secondaryDark};
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
	margin-top: 50px;
	width: 170px;
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

const SpanWarning = styled.span`
	color: lightgray;
`;
export {
	StyledContainer,
	StyledLabel,
	StyledInput,
	SubmitButton,
	StyledTitle,
	SpanWarning
};
