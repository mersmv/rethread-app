import { useNavigate } from 'react-router-dom';
import {
	StyledAddBackground,
	StyledAddProduct,
	StyledBanner,
	StyledLink,
	StyledTitle
} from './styles';

const BannerUser = () => {
	const navigate = useNavigate();
	return (
		<StyledBanner>
			<StyledAddBackground>
				<StyledAddProduct>
					<StyledTitle>
						Sube tus productos a tu perfil y ¡empieza a ganar!
					</StyledTitle>
					<StyledLink onClick={() => navigate('/new-product')}>
						Añadir Producto
					</StyledLink>
				</StyledAddProduct>
			</StyledAddBackground>
			<div>{/* productos */}</div>
		</StyledBanner>
	);
};

export default BannerUser;
