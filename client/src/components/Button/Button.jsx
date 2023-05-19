import { StyledButton } from './styles';

const Button = ({ color, text, link }) => {
	return (
		<StyledButton to={link} color={color}>
			{text}
		</StyledButton>
	);
};

export default Button;
