import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
    const [menu, setMenu] = React.useState(false);

    return (
        <Navigation>
            <Logo>Milton<span>AZIBAPU</span></Logo>
            <Menu onClick={()=> setMenu(!menu)}>{menu ? <FaTimes/> : <FaBars/> }</Menu>
                <LinkContainer menu={menu}>
                <NavBarLink to="/">HOME</NavBarLink>
                <NavBarLink to="/project">PROJECT</NavBarLink>
                <NavBarLink to="/AboutUs">ABOUTME</NavBarLink>
            </LinkContainer>
        </Navigation>
    );
}

export default Navbar;

const Navigation = styled.nav`
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
    position:fixed;
    background-color:white;
    padding:0 5%;
    background-color:black;

    span{
        color:yellow;
    }
`
const Logo = styled.h1`
    line-height:20px;
    color:white;
`
const NavBarLink = styled(Link)`
    padding:0 5%;
    text-decoration:none;
    font-size:1.1rem;
    cursor:pointer;
    font-weight:bold;
    color:yellow;
    transition:.4s;

&:hover{
    color:white;
}

@media(max-width:768px) {
    padding:5px 0;
}
`
const LinkContainer = styled.div`
    margin-right:20%;
    display:flex;
    align-items:center;
    position:relative;

@media (max-width:768px) {
    overflow:hidden;
    flex-direction:column;
    width:100%;
    max-height: ${({menu}) => (menu ? "400px":"0")}
}
`
const Menu = styled.button`
    display:none;
    margin-right:10%;
    cursor:pointer;
    background-color:yellow;
    padding:0.2rem 1rem;
    transition:.4s;

&:hover{
    background-color:white;
}

@media (max-width: 768px) {
    display:flex;
    align-items:center;
}
`