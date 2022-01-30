import React from 'react';
import {FaBars} from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const NavBar = ({toggle}) => {
  return <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Rooster</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='alarms'>Alarms</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='signup'>Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
  </>;
};

export default NavBar;
