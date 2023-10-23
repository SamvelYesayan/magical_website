import React from 'react'
import './HomeComponent4.css'
import img from '../../images/home3.png'

const HomeComponent4 = () => {
  return (
    <div className='home-comp4'>
        <div className='home-comp4-div1'>
            <h3>What Is the device your project? *</h3>
            <br />
            <div className='home-comp4-div1-radio'>
                <div><input type="radio" name='1' id='radio1' /> <label for="radio1">Website</label></div>
                <div><input type="radio" name='1' id='radio2' /><label for="radio2">Mobile</label></div>
                <div><input type="radio" name='1' id='radio3' /><label for="radio3">Other</label></div>
            </div>
            <br />
            <b>Full Name: </b>
            <input type="text" />
            <br />
            <b>Country: </b>
            <input type='text' />
            <br />
            <b>Email: </b>
            <input type="email" />
            <br />
            <b>Message: </b>
            <textarea cols={3} rows={6}></textarea><br />
            <button type='submit' >Submit</button>
        </div>
        <div className='home-comp4-div2'>
            <img src={img} />
            
            
        </div>
    </div>
  )
}

export default HomeComponent4