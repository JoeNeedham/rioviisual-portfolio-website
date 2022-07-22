import styled from 'styled-components';
import { Container } from '../../GlobalStyles'

export const Nav = styled.nav`
	background: transparent;
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;
	position: sticky;
	background-color: white;
	box-shadow: 0 5px 5px -2px rgba(0,0,0,.2);
	transition: background-color 0.3s ease-in;
	width: auto;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	height: 80px;

	${Container}
`;

export const Heading = styled.h1`
    display: flex;
    justify-content: start;
    align-items: center;
    letter-spacing: 7px;
    font-size: 47px;
    font-family: 'Kaushan Script', cursive;
	margin-left: 20px;
	@media (max-width:750px) {
		display: none;
}
`
export const NavMenu = styled.ul`
	display: flex;
    align-items: center;
    justify-content: end;
	list-style: none;
	text-align: center;
	width: 100%;
	transition: smooth;
	@media (max-width: 750px) {
		width: 100%;
    	position: absolute;
		display: flex;
    	flex-direction: column;
    	align-items: center;
		top: 75px;
		background-color: white;
		box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
		padding-top: 15px;
		transition-property: top;
    	transition-duration: 1s;
		transition: smooth;
    }
`;

export const NavItem = styled.li`
	cursor: pointer;
`;

export const NavLinks = styled.span`
	display: flex;
	align-items: center;
	text-decoration: none !important;
	height: 100%;
    color: black;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 525;
    padding: 0 12px;
	transition: smooth;
    &:hover {
        padding: 5px;
        border-bottom: 1px solid black;
        transition: $ease;
        transform: scale(1.1);
    }
	@media (max-width: 750px) {
		margin-bottom: 25px;
		border-bottom: 1px solid black;
		padding: 0 175px 15px;
		&:hover{
			transform: none;
			border-bottom: none;
			border-bottom: 1px solid black;
			padding: 0 175px 15px;
		}	
	}
`;

export const BurgerContainer = styled.div`
        display: block;
        position: absolute;
        top: 20%;
        left: 45%;
		transition: smooth;
		display: none;
		@media (max-width:750px) {
		display: block;
}
`;

export const Burger = styled.div`
	width: 40px;
    height: 1px;
    background-color: black;
    margin: 10px;
	display: block;
`;
