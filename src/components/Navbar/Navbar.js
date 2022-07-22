import React,{useState}  from 'react'
import { Nav,
        NavbarContainer,
        NavLinks,
        NavItem,
        NavMenu,
        Heading,
        Burger,
        BurgerContainer
    } from '../Navbar/NavbarStyles'
import { data } from '../../data/NavbarData'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isClicked, setisClicked] = useState(false);

    const handleClick = () => {
        setisClicked(!isClicked);
    }
    return (
        <Nav>
            <NavbarContainer>
                <BurgerContainer onClick={handleClick}>
                    <Burger />
                    <Burger />
                    <Burger />
                </BurgerContainer>
                <Heading>
                    RIOVIISUALS
                </Heading>
                <NavMenu style={{top: !isClicked ? '-1000px' : '75px', transition: 'smooth'}} >
                    {data.map((el, index) => (
                        <NavItem key={index}>
                            <NavLinks>
                                <Link onClick={handleClick} style={{textDecoration: 'none', color: 'black'}} to={el.pathname}>
                                    {el.text}
                                </Link>
                            </NavLinks>
                        </NavItem>
                    ))}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
