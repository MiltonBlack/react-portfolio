import React from 'react';
import { FaBootstrap, FaFacebook, FaFigma, FaGithub, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa';
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
                    <h2> a <span>Professional Developer and Designer</span></h2>
                    <p>im a Professional web developer and also a web designer. i utilize javascript frameworks like react.js</p>
                    <div className='hero-btn dflex'>
                        <div className='col-1'>
                            <h4>
                                FIND WITH ME
                            </h4>
                            <div className='button'>
                                <button className='btn-shadow'>
                                    <FaFacebook fontSize="20px"/>
                                </button>
                                <button className='btn-shadow'>
                                    <FaGithub fontSize="20px"/>
                                </button>
                                <button className='btn-shadow'>
                                    <FaTwitter fontSize="20px"/>
                                </button>
                                <button className='btn-shadow'>
                                    <FaLinkedin fontSize="20px"/>
                                </button>
                            </div>
                        </div>
                        <div className='col-1'>
                            <h4>BEST SKILLS</h4>
                            <button className='btn-shadow'>
                                <FaFigma width="20px" height="20px"/>
                            </button>
                            <button className='btn-shadow'>
                                <FaBootstrap/>
                            </button>
                            <button className='btn-shadow'>
                                <FaReact/>
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