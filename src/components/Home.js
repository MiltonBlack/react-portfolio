import React from "react";
import styled from "styled-components";

function Home() {
    return (
        <HomePage id="home">
            <Containter>
                <Box1>
                    <Title>Hello my name is Eghoi AZIBAPU Milton, i am a Front End (React) Web Developer</Title>
                    <Box2>
                        <Image src="/portfolio-svg/programming.svg"/>
                    </Box2>
                </Box1>
                <Box>
                    <HireMe>Hire Me</HireMe>
                </Box>
            </Containter>
        </HomePage>
    );
}

export default Home;

const HomePage = styled.section`
    height:100vh;
    background:url("pre.jpg") center center/cover;
    padding-top:65px;
`
const Containter = styled.div`
    padding:30px 20px;
    margin:5px 10px;
    background:rgba(0,0,0,0.5);
    height:95vh;
    width:95vw;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    border-radius:1.2rem;

@media(max-width:768px) {
    display:block;
    flex-direction:column;
    justify-content:space-between;
    padding:5px 3px;
    margin:1px 2px;
}
`
const Image = styled.img`
    height:350px;


@media(max-width:786px) {
    height:200px;
    margin-bottom:20px;
}
`
const Title = styled.div`
    color:white;
    font-size:45px;
    font-family:cursive;
    // background-color:rgba(0, 0, 0, 0.5);
    margin:1rem;
    border-radius:1rem;
    text-align:center;
    height:350px;

@media(max-width:786px){
    font-size:35px;
    margin-bottom:30px;
}
@media(max-width:976px){
    font-size:35px;
    margin-bottom:30px;
    height:auto;
}
`
const Box = styled.div`
    width:80%;
    height:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding:.2rem 30px;
    margin:0 25%;
    border:1px solid white;

@media(max-width:786px) {
    margin:9px 20px;
    padding:0 10px;
}
`
const HireMe = styled.button`
    padding:.3rem 3rem;
    background-color:yellow;
    border:none;
    font-weight:bold;
    font-size:1rem;
    transition:.5s;
    
&:hover{
    color:white;
    background-color:black;
    cursor:pointer;
    box-shadow:2px 2px 10px white, 3px 3px 15px white;
    }
`
const Box1 = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

@media(max-width:786px) {
    flex-direction:column;
    align-items:center;
    text-align:center;
}
`
const Box2 = styled.div`
    background-color:rgba(255, 255, 255, 0.5);
    margin:.5rem;
    border-radius:1rem;

@media(max-width:786px) {
    flex-direction:column;
    align-items:center;
    text-align:center;
}
`