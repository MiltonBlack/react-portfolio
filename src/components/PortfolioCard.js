import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaHeart, FaSearch, FaThumbsUp, FaTimes } from 'react-icons/fa';

function PortfolioCard(props) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

  return (
    <>
        <Cardboard className='box btn-shadow'>
            <div className='img'>
                <Image src={props.image} alt="" onClick={toggleModal}/>
            </div>
            <div className='category dflex'>
                <span onClick={toggleModal}>{props.category}</span>
                <label>
                    <FaHeart className='right'/>
                    {props.likes}
                </label>
            </div>
            <div className='title'>
                <h2 onClick={toggleModal}>{props.title}</h2>
                <a href='#popup' className='arrow' onClick={toggleModal}>
                    <FaArrowRight />
                </a>
            </div>
        </Cardboard>

        {/*--------------------POPUP MODAL------------------------------------*/}

        {modal && (<div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content dflex'>
                <div className='modal-img left'>
                    <Image1 src={props.image} alt=''/>
                </div>
                <div className='modal-text right'>
                    <span>Featured - Design</span>
                    <h1>{props.title}</h1>
                    <p>THIS IS A VERY LNG TEXT, IT IS JUST FOR ILLUSTRATION PURPOSES, FOR THE PURPOSE OF TESTING OUT HOW THIS PARAGRAPH LOOKS ON THE OVERLAY</p>
                    <p>THIS IS A VERY LNG TEXT, IT IS JUST FOR ILLUSTRATION PURPOSES, FOR THE PURPOSE OF TESTING OUT HOW THIS PARAGRAPH LOOKS ON THE OVERLAY</p>
                    <div className='button fflex mtop'>
                        <button className='btn-shadow'>
                            LIKE THIS <FaThumbsUp/>
                        </button>
                        <button className='btn-shadow'>
                            VIEW PROJECT <FaSearch/>
                        </button>
                    </div>
                    <button className='close-modal btn-shadow' onClick={toggleModal}><FaTimes/></button>
                </div>
            </div>
        </div>)}

    </>
  )
}

export default PortfolioCard

const Cardboard = styled.div`
    transition: 0.5s ease-in;
    &:hover{
        background: #ff014f;
            color: white;
            transform: translateY(-10px);
    }
`
const Image = styled.img`
    height: 210px;
    width:100%;
    /* padding:5px; */
    background-color: #fafafb;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.5s;

    &:hover {
        transform: scale(1.2);
    }
`
const Image1 = styled.img`
    height: 100%;
    width:100%;
    /* padding:5px; */
    background-color: #fafafb;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.5s;

    &:hover {
        transform: scale(1.2);
    }
`
