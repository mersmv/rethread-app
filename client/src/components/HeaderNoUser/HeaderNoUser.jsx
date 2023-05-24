import { COLORS } from '../../constants/colors';
import Button from '../Button/Button';
import {
	StyledLinksContainer,
	StyledLogo,
	StyledNav,
	StyledSearch
} from './styles';

const HeaderNoUser = () => {
	return (
		<StyledNav>
			<StyledLinksContainer>
				<Button
					link={'/register'}
					color={COLORS.secondaryDark}
					text={'registrate'}
				></Button>
				<Button
					link={'/login'}
					color={COLORS.secondaryLight}
					text={'login'}
				></Button>
			</StyledLinksContainer>
			<StyledLogo src='assets/images/logo-rethread.png' alt='' />
			<div>
				<label htmlFor=''>
					search
					<div>
						<img
							src='../../../public/assets/images/magnifying-glass.svg'
							alt=''
						/>
						<StyledSearch type='text' />
					</div>
				</label>
			</div>
			<img src='' alt='' />
		</StyledNav>
	);
};

export default HeaderNoUser;
