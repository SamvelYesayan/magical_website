import React from 'react'
import './HomeComponent3.css'

const HomeComponent3 = () => {

 const data = [
    {
        title: 'JavaScript',
        duration: '9 weeks',
        button: 'Introduction'
    },
    {
        title: 'JavaScript',
        duration: '9 weeks',
        button: 'Profession'
    },
    {
        title: 'JavaScript',
        duration: '6 weeks',
        button: 'Profession'
    },
    {
        title: 'JavaScript',
        duration: '2 months',
        button: 'Introduction'
    }
 ]   

return (
    <div className='home-comp3'> 
        <div className='home-comp3-text'>
            <h1>Start Learning</h1>
            <h1 style={{ color: '#6C00FF'}}>Popular Courses</h1>
        </div>
        <div className='home-comp3-element'>
            {data.map((element)=>(
                <div className='home-comp3-item'>
                    <div>
                        <b>Introduction to  <span style={{ color: '#6C00FF'}}>{element.title}</span></b>
                        <b>{element.duration}</b>
                        <button>{element.button}</button>           
                    </div>
                    <div>
                        <img className='home-comp3-item-img' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"  />
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default HomeComponent3