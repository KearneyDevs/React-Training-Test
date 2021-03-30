import React from 'react';
import styled from 'styled-components';
import Img from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div``;

const NavbarWrap = styled.div``;
const Logo = styled.div``;
const Nav = styled.div``;
const NavLink = styled(Link)``;
const Search = styled.div``;
const SearchWrap = styled.div``;
const Input = styled.input``;
const ButtonContainer = styled.div``;
const Button = styled.a``;

const NavBar = () => {
    return (
        <NavbarContainer>
            <NavbarWrap>
                <Logo />
                <Nav>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/">MARKET</NavLink>
                    <NavLink to="/">TRADE</NavLink>
                    <NavLink to="/">PRICING</NavLink>
                    <NavLink to="/">DOWNLOAD</NavLink>
                    <NavLink to="/">HELP</NavLink>
                </Nav>
                <Search>
                    <SearchWrap>
                        <Input type="text" placeholder="Symbol/Name"/>
                    </SearchWrap>
                </Search>
                <ButtonContainer>
                    <Button>SIGN UP</Button>
                    <Button>LOG IN</Button>
                </ButtonContainer>
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default NavBar
