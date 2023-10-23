import React from 'react'
import logo from '../../images/home2.png';
import './HomeComponent2.css'

const HomeComponent2 = () => {
  return (
    <div className='home-comp2'>
        <img src={logo} />
        <div className='home-comp2-text'>
            <h1>Who We’re & What We Do ?</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Placeat commodi repudiandae earum optio. Facilis, 
                <br />aut aliquid, repudiandae odit sequi neque quae ipsa cum <br /> rerum accusamus, architecto velit obcaecati dicta facere? <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Placeat commodi repudiandae earum optio. Facilis, 
                <br />aut aliquid, repudiandae odit sequi neque quae ipsa cum <br /> rerum accusamus, architecto velit obcaecati dicta facere?
            </p>

        </div>
    </div>
  )
}

export default HomeComponent2