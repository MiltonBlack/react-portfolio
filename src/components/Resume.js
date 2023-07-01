import React from 'react'
import ResumeCard from './ResumeCard'
import ResumeAPI from './ResumeAPI.json'
import './Resume.css'

function Resume() {
  return (
    <>
        <section className='resume' id='resume'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4>3+ YEARS OF EXPERIENCE</h4>
                    <h1>My Resume</h1>
                </div>
                <div className='content-section mtop dflex'>
                    <div className='left'>
                        <div className='heading'>
                            <h4>2017-2022</h4>
                            <h1>Education Quality</h1>
                        </div>
                        <div className='content'>
                            {ResumeAPI.map((res, index) => {
                                if (res.category === "education") {
                                    return (<ResumeCard key={index} title={res.title} year={res.year} desc={res.desc} rate={res.rate}/>)
                                }
                            })}
                        </div>
                    </div>
                    <div className='left'>
                        <div className='heading'>
                            <h4>2020-2022</h4>
                            <h1>Work Expeience</h1>
                        </div>
                        <div className='content'>
                            {ResumeAPI.map((res, index) => {
                                if (res.category === "experience") {
                                    return <ResumeCard key={index} title={res.title} year={res.year} desc={res.desc} rate={res.rate}/>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Resume