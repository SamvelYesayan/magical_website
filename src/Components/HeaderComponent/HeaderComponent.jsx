import React from 'react'
import './HeaderComponent.css';
import { IoIosArrowDown } from 'react-icons/io';
import logo_remove from '../../images/logo_remove.png'
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';


const HeaderComponent = () => {

    const [dropdown,setDropDown] = useState(false) 
    const [mediaDropDown,setMediaDropDown] = useState(false)
    const [responseMenu, setResponseMenu] = useState(false)


    

return (
    <div className='header' onClick={(evt)=>{
        if(evt.target.id !== 'header-dropdown' && evt.target.className !== 'header-services'){
            setDropDown(false);
        }
    }}>
    
        <Link to={'/'}>
        <img className='header-logo' src={logo_remove} />
        </Link>
        <div className='header-menu'>


            <Link to={'/services'}>
            <b className='header-services'>Services </b>
            </Link>
   
            <Link to={'/portfolio'}>
                <b>Portfolio</b>
            </Link>

            <Link to={'/about'}>
                <b>About Us</b>
            </Link>

            <Link to={'/courses'}>
                <b>Courses</b>
            </Link>

            <Link to={'/contact'}>
            <b>Contacts</b>
            </Link>

        </div>
        
        <button className='header-btt'>Get Started</button>

        <div>
            <HiMenuAlt3 className='header-response-menu' onClick={()=>{
                setResponseMenu(true)
            }} />

            {responseMenu ? (
                      <div  className='header-response-menu-dropdown' onClick={(evt)=>{
                        if(evt.target.className != 'header-media-dropdown-element' && evt.target.className != 'header-services'){
                            setMediaDropDown(false)
                            console.log(evt.target.className)
                        }
                    }}>
                    <div style={{ display:'flex',justifyContent: 'start',width: '100%'}}>
                        <AiOutlineCloseCircle onClick={()=>setResponseMenu(false)} className='header-response-menu-dropdown-icon'/>
                    </div>
                    <div className='header-response-menu-dropdown-text'>
                        <Link to={'/services'}>
                            <b>Services</b>
                        </Link>

                        <Link to={'/portfolio'}>
                            <b>Portfolio</b>
                        </Link>

                        <Link to={'/about'}>
                            <b>About Us</b>
                        </Link>

                        <Link to={'/courses'}>
                            <b>Courses</b>
                        </Link>
                        <Link to={'/contact'}>
                            <b>Contacts</b>
                        </Link>
                    </div>
           
                </div>
            ) : ''}

      
        </div>

    </div>
  )
}

export default HeaderComponent