import { COLORS } from '../../constants/colors';
import Button from '../Button/Button';
import {
	StyledLinksContainer,
	StyledLogo,
	StyledNav,
	StyledSearch
} from './styles';

const HeaderUser = () => {
	return (
		<StyledNav>
			<StyledLinksContainer>
				<Button
					link={'/profile'}
					color={COLORS.secondaryDark}
					text={'mi perfil'}
				></Button>
				<Button
					link={'/newproduct'}
					color={COLORS.secondaryLight}
					text={'sube articulos'}
				></Button>
			</StyledLinksContainer>
			<StyledLogo src='assets/images/logo-rethread.png' alt='' />
			<div>
				<label htmlFor=''>
					search
					<div>
						<img src='' alt='' />
						<StyledSearch type='text' />
					</div>
				</label>
			</div>
			<img src='' alt='' />
		</StyledNav>
	);
};

export default HeaderUser;
