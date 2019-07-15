import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 10px 0 0 25px;
	@media (max-width: 5298px) {
		width: 8vw;
	}
`;

export const OptionsContainer = styled.div`
	font-size: 1.5rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media (max-width: 528px) {
		font-size: 1.1rem;
	}
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	@media (max-width: 528px) {
		padding: 5px 5px 0;
	}
`;
