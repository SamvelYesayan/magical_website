import React from 'react'
import './HomeComponent1.css'
import 
img from  '../../../images/home.png'

const HomeComponent1 = () => {
  return (
    <div className='home-comp1'>
        <div className='home-comp1-text'>
            <h1>We Create Real</h1>
            <h1>MAGIC</h1>
            <p>The magical platform for digital products</p>
            <button>Get In Touch</button>
        </div>
        
        <img src={img} />


    </div>
  )
}

export default HomeComponent1