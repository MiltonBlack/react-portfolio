import React from 'react'
import Slide from './Slide'
import TestimonialAPI from './TestimonialAPI'
import './Testimonial.css'

function Testimonial() {

    // const [data, setData] = useState(TestimonialAPI)
    // const [index, setIndex] = useState(0)
    // useEffect(() => {
    //     const lastIndex = data.length - 1
    //     if (index < 0) {
    //         setIndex(lastIndex)
    //     }
    //     if (index > lastIndex) {
    //         setIndex(0)
    //     }
    // }, [index, data]) 

    // useEffect(() => {
    //     let slider = setInterval(() => {
    //         setIndex(index + 1)
    //     }, 3000)
    //     return () => clearInterval(slider)
    // },[index])
    
  return (
    <>
        <section className='testimonial' id='clients'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>WHAT CLIENTS SAY</h4>
                    <h1>Testimonials</h1>
                </div>
                <div className='slide'>
                    {TestimonialAPI.map((Test, valIndex)=> {
                        return <Slide key={Test.id} valIndex={valIndex} img={Test.image} name={Test.name} office={Test.office} desc={Test.desc} date={Test.date} post={Test.post} design={Test.design}/>
                    })}
                    {/* <div className='slide-button'>
                        <button className='btn-shadow prev-btn' 
                        // onClick={() => setIndex(index - 1)}
                        >
                            <FaArrowLeft/>
                        </button>
                        <button className='btn-shadow next-btn' 
                        // onClick={() => setIndex(index + 1)}
                        >
                            <FaArrowRight/>
                        </button>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonial