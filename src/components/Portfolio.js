import React from 'react';
import PortfolioCard from './PortfolioCard';
import Portfolio_data from './Portfolio-data';
import './Portfolio.css'

function Portfolio() {
  return (
    <>
        <section className='portfolio top' id='portfolio'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                    <h1>My Portfolio</h1>
                </div>
                <div className='content grid'>
                    {Portfolio_data.map((port, index) => {
                        return <PortfolioCard key={index} image={port.image} category={port.category} title={port.title} likes={port.totalLikes} />
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio