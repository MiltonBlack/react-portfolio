import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import TestimonialAPI from './TestimonialAPI'

function Slide(props) {
    // let position = "nextSlide"
    // if (props.valIndex === props.index) {
    //     position = "activeSlide"
    // }
    // if (props.valIndex === props.index - 1 || (props.index === 0 && props.valIndex === TestimonialAPI.length - 1)) {
    //     position ="lastSlide"
    // }
  return (
    <>
        <article className='box dflex'>
        {/* <article className={`box dflex ${position}`  }> */}
            <div className='left box-shadow'>
                <div className='img'>
                    <img src={props.img} alt=''/>
                </div>
                <div className='details mtop'>
                    <span className=''>{props.design}</span>
                    <h2>{props.name}</h2>
                    <label htmlFor=''>{props.office}</label>
                </div>
            </div>
            <div className='right'>
                <div className='icon'>
                    <div className='quote'>
                        <FaQuoteRight size="150px" opacity='0.1'/>
                    </div>
                </div>
                <div className='content box-shadow mtop'>
                    <h1>{props.post}</h1>
                    <h3>{props.date}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </article>
    </>
  )
}

export default Slide