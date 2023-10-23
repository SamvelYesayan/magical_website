import React from 'react'
import './ServicesPage.css'
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../../images/slide1.png'
import { Slide } from 'react-slideshow-image';
import slide3 from '../../images/slide2.png'
import slide2 from '../../images/slide3.png'
const ServicesPage = () => {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px',
        marginTop: '30px',
        background: 'linear-gradient(56.4deg, #6C00FF 19.14%, rgba(186, 245, 255, 0) 108.7%, rgba(255, 255, 255, 0) 108.71%)'
      }
      const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 1',
          name: 'IT Consulting',
          text: 'Magical will help to coordinate activities within',
          text2: 'one or multiple IT projects to achieve faster',
          text3: 'project workflow and quality results.',
          ul: true,
          li1: 'Planning the project life cycle.',
          li2: 'Budgeting and scheduling the project.',
          li3: 'Organizing and managing communication',
          li3_2: 'between project participants',
          li4: 'Monitoring and enhancing project performance',
          img: 'img1'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          caption: 'Slide 2',
          name: 'Mobile Development',
          text: 'Mobile App development consulting aims at',
          text2: 'providing professional guidance in mobile',
          text3: 'development initiatives',
          text4: 'Magical is experienced in creating high',
          text5: 'performing and feature-packed native and cross-platform',
          text6: 'mobile applications for Android and iOS',
          img: 'img2'

        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 3',
          name: 'Web Development',
          text: 'Web Development consulting provides',
          text2: 'comprehensive support and enhancement of web',
          text3: 'applications before, during and after their development',
          text4: 'Our highly reliable and scalable web',
          text5: 'applications are marked by a robust, scalable',
          text6: 'architecture that supports high performance',
          img: 'img3'
        },
      ];
  return (
    <div className='services-page'>
    <div className="slide-container">
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div key={index}>
                <span id='slide-name'>{slideImage.name}</span>
                <div style={{ ...divStyle }}>
                    <div id='slide-div'>
                      <div>
                        <p>
                          
                          {slideImage.text}<br />{slideImage.text2} <br />{slideImage.text3} <br/><br/>


                        
                          {slideImage.text4} <br/>{slideImage.text5} <br/> {slideImage.text6}
                        </p>
                  
                        {slideImage.ul ? (
                             <ul>
                          <li>{slideImage.li1}</li>
                          <li>{slideImage.li2}</li>
                          <li>{slideImage.li3} <br /> {slideImage.li3_2}</li>
                          <li>{slideImage.li4}</li>
                        </ul>
                     ): ''}

                     
                    
                      </div>
                      <div>
                          
                          {slideImage.img == 'img1' ? (
                            <img className='slide-img' src={slide1} />
                          ) : ''}
                          {slideImage.img == 'img3' ? (
                            <img className='slide-img' src={slide3} />
                          ) : ''}
                          {slideImage.img == 'img2' ? (
                            <img className='slide-img' src={slide2} />
                          ) : ''}
                      </div>  
                    </div>                    
                </div>
                </div>
            ))} 
            </Slide>
        </div>
    </div>
  )
}

export default ServicesPage