import React from 'react';
import { FaFacebook, FaFigma, FaGithub, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';
import {SiTailwindcss, SiRedux} from 'react-icons/si'
import {TbBrandReactNative} from 'react-icons/tb'
import styled from "styled-components";

function Home() {
  return (
    <>
        <HomeSection className='hero' id="home">
            <div className='container fflex top'>
                <div className='left top'>
                    <h3>WELCOME TO MY WORLD</h3>
                    <h1>Hi, i am <span>MiltonAzibapu</span>
                    </h1>
                    <h2> a <span>Professional Mobile Developer</span></h2>
                    <p>im a Professional Mobile developer and also a Web designer. i utilize javascript frameworks like React Native and React.js, and CSS frameworks like Tailwindcss, Material UI and Chakra UI</p>
                    <div className='hero-btn dflex'>
                        <div className='col-1'>
                            <h4>
                                FIND WITH ME
                            </h4>
                            <div className='button'>
                                <button className='btn-shadow mb'>
                                    <FaFacebook fontSize="20px"/>
                                </button>
                                <button className='btn-shadow mb'>
                                    <FaGithub fontSize="20px"/>
                                </button>
                                <button className='btn-shadow mb'>
                                    <FaTwitter fontSize="20px"/>
                                </button>
                                <button className='btn-shadow mb'>
                                    <FaLinkedin fontSize="20px"/>
                                </button>
                            </div>
                        </div>
                        <div className='col-1'>
                            <h4>BEST SKILLS</h4>
                            <button className='btn-shadow mb'>
                                <FaFigma width="20px" height="20px" size='20px'/>
                            </button>
                            <button className='btn-shadow mb'>
                                <SiTailwindcss fontSize="20px"/>
                            </button>
                            <button className='btn-shadow mb'>
                                <FaReact size='20px'/>
                            </button>
                            <button className='btn-shadow mb'>
                                <TbBrandReactNative size='20px'/>
                            </button>
                            <button className='btn-shadow mb'>
                                <SiRedux size='20px'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='right-img'>
                        <img src="/portfolio-svg/programming.svg" alt="prog"/>
                    </div>
                </div>
            </div>
        </HomeSection>
    </>
  )
}

export default Home

const HomeSection = styled.section`
    position: relative;
    h1 {
        font-size: 60px;
        font-weight: bold;
        span {
            color:#ff014f;
        }
    }
    h2 {
        font-size: 50px;
        font-weight: bold;
        color:#ff014f;
        span {
            color:black;
        }
    }
    h3 {
        font-weight: 100;
        letter-spacing: 2px;
    }
    h4 {
        font-weight: 500;
        letter-spacing:2px;
        color:#43474b;
        font-size:15px;
        margin: 30px 0;
    }
    p {
        color: #878e99;
        font-size: 18px;
        line-height: 30px;
        margin-top: 30px;
    }
    button {
        margin-right:20px;
        transition: 0.5s;
        &:hover {
            background: #ff014f;
            color: white;
            transform: translateY(-10px);
        }
    }
`