import React from 'react';
import styled from 'styled-components';
import {FaArrowCircleRight} from 'react-icons/fa'

function Card(props) {
  return (
    <Cardboard className='box btn-shadow'>
                    <Image src={props.img} alt=''/>
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                    <a href='#azi'>
                        <FaArrowCircleRight/>
                    </a>
    </Cardboard>
  )
}

export default Card

const Cardboard = styled.div`
    transition: 0.5s ease-in;
    &:hover{
        background: #ff014f;
            color: white;
            transform: translateY(-10px);
    }
`
const Image = styled.img`
    height: 50px;
    padding:5px;
    background-color: #fafafb;
    border-radius: 5px;
`