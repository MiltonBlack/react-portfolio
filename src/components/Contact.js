import React, {useState} from 'react'
import './Contact.css'
import {FaFacebook, FaGithub, FaLongArrowAltDown, FaTwitter} from 'react-icons/fa'

function Contact() {

    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        subject:"",
        message:""
    })
    const InputEvent = (event) => {
        const {name, value} = event.target
        setData ((preVal) => {
            return {
                ...preVal,
                [name]:value,
            }
        })
    }

    const formSubmit = (event) => {
        event.preventDefault()
        alert(
            `My Name is${data.fullname}.
            My Phone Number is ${data.phone}.
            My Email Address is ${data.email}.
            My Subject is ${data.subject}.
            My Message is: ${data.message}.
            `)
    }
  return (
    <>
        <section className='contact' id='contact'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4>CONTACT</h4>
                    <h1>CONTACT ME WITH</h1>
                </div>
                <div className='content dflex'>
                    <div className='left'>
                        <div className='box box-shadow'>
                            <div className='img'>
                                <img src='/TestAPI/1.jpg' alt='' />
                            </div>
                            <div className='details'>
                                <h1>MILTON AZIBAPU</h1>
                                <p>I Am available for FreeLancing, connect with me via my contact details</p>
                                <br/> 
                                <p>Phone: +234 9037 289 192</p>
                                <p>Email: Arziblack2@gmail.com</p> <br/>
                                <span>FIND WITH ME</span>
                                <div className='button fflex'>
                                    <button className='btn-shadow'>
                                        <FaFacebook/>
                                    </button>
                                    <button className='btn-shadow'>
                                        <FaGithub/>
                                    </button>
                                    <button className='btn-shadow'>
                                        <FaTwitter/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right box-shadow'>
                        <form onSubmit={formSubmit}>
                            <div className='fflex row'>
                                <div className='input unit row'>
                                    <span>Your Name</span>
                                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent}/>
                                </div>
                                <div className='input unit row '>
                                    <span>Your Number</span>
                                    <input type='text' name='phone' value={data.phone} onChange={InputEvent}/>
                                </div>
                                <br/>
                                <div className='input row'>
                                    <span>EMAIL</span>
                                    <input type='email' name='email' value={data.email} onChange={InputEvent}/>
                                </div>
                                <div className='input row'>
                                    <span>Subject</span>
                                    <input type='text' name='subject' value={data.subject} onChange={InputEvent}/>
                                </div>
                                <div className='input row'>
                                    <span>Your Message</span>
                                    <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                                </div>
                                <button className='btn-shadow'>
                                    SEND MESSAGE <FaLongArrowAltDown className='longarrow'/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact