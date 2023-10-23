import React from 'react'
import './AboutComponent1.css'
import img from  '../../images/about.png'

const AboutComponent1 = () => {
  return (
    <div className='about-comp1'>

            <img src={img} />
        <div>
            <h2>Who We’re & What We Do ?</h2>
            <p>
            Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to <br /> emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. <br /> It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. <br /> <br /> Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters <br /> have been changed by addition or removal, so to deliberately render
            </p>
        </div>
    </div>
  )
}

export default AboutComponent1