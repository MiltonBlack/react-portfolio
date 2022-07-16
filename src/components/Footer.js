import React from 'react'
import {FaCopyright} from 'react-icons/fa'

function Footer() {
  return (
    <>
        <footer>
            <div className='container text-center top'>
                {/* <div className='img'>
                    <img src='' alt=''/>
                </div> */}
                <p><FaCopyright/>2022. All Right Reserved by MiltonBlack-Interactive</p>
            </div>
        </footer>
    </>
  )
}

export default Footer