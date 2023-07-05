import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css'

function Navbar() {

    // When Scroll Header at top position

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    // Toggle Menu
    const [mobile, setMobile] = useState(false)
  return (
    <>
        <Header className="header heady">
            <Container className='dflex'>
                <div className='logo'>   
                <span>MiltonAzibapu</span>                
                </div>
                <div className='navlink'>
                    <ListItem className={mobile ? "nav-link-mobile" : "link fflex uppercase"} onClick={()=> setMobile(false)}>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#skills'>Features</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#resume'>Resume</a></li>
                        {/* <li><a href='#clients'>Testimonials</a></li> */}
                        <li><a href='#contact'>Contact us</a></li>
                        <li><HomeButton className="home-btn"><a href='#contact'>HIRE ME</a></HomeButton></li>
                    </ListItem>
                    <button className='toggle' onClick={()=> setMobile(!mobile)}>
                        {mobile ? <FaTimes className="close"/> : <FaBars className="open"/> }
                    </button>
                </div>
            </Container>
        </Header>
        <section className="demo"></section>
    </>
  )
}

export default Navbar;

const Header = styled.header`
    height:10vh;
    line-height: 10vh;

&:active {
  height: 12vh;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: #ecf0f3;
  box-shadow: -1px 11px 24px -11px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
}

@media (max-width:768px) {
    padding-top: 5px;
    padding-bottom: 5px;
    &:active {
        height: 15vh;
    }
}
`
const Container = styled.div`
    padding-top:15px;
    max-width:95%;
    margin:auto;
`
const ListItem = styled.ul`
    li {
        margin-left: 30px;
        a {
          transition  :0.5s ;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 1px;
         
          &:hover {
            color:red;
             }
        }      
    }
`
const HomeButton = styled.button`
    padding:18px 25px;
    border-radius: 6px;
    transition:0.3s all ease;
    cursor:pointer;
    height:fit-content;
    color:red;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 4px 4px 8px #cbcbcb, 4px -4px 8px #ffffff;

&:hover {
    background-color: #ff014f;
    color:white;
    transform: translateY(-10px);
}
`