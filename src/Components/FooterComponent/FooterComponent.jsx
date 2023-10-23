import React from 'react'
import './FooterComponent.css'
import logo from '../../images/logo_remove.png'
import { BiLogoLinkedin, BiLogoTelegram, BiLogoFacebookCircle, BiLogoInstagram } from 'react-icons/bi';
import {BsGeoAlt} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'
import {LuMailOpen} from 'react-icons/lu'
const FooterComponent = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <img src={logo} />
            <p>
            Magical is a company whose primary products are 
            <br />various forms of software, software technology, <br />
             distribution, and software product development, <br />
             also a platform to get programming courses
            </p>
            <div className="footer-icons">
                <a href='https://www.linkedin.com/company/magical-company-official/' target='_blank'>
                      <div><BiLogoLinkedin/></div>
                </a>

                <a href='https://t.me/+w1fr8h23oYVhOWE6' target='_blank'>
                   <div><BiLogoTelegram /></div>
                </a>

                <a href='https://www.facebook.com/magicalcompanyofficial' target='_blank'>
                  <div><BiLogoFacebookCircle/></div>

                </a>

                <a href='https://www.instagram.com/official_magicalcompany/' target='_blank'>
                  <div><BiLogoInstagram /></div>
                </a>
            </div>
        </div>
        <div className='footer-right'>
          <div>
            <b>Services</b>
            <span>IT Consulting</span>
            <span>Web Development</span>
            <span>Mobile Development</span>
            <span>QA & Testing</span>
            <span>UX/UI Design</span>
          </div>
          <div>
            <b>Company</b>
            <span>About Us</span>
            <span>Courses</span>
            <span>Career</span>
          </div>
          <div>
            <b>Other</b>
            <span>Help Center</span>
            <span>Pricing</span>
            <span>Privacy Policy</span>
            <span>Terms & Privacy</span>
          </div>
  
          <div>
            <b>Contacts</b>
            
            <span> <BsGeoAlt/> Sevan, Armenia</span>
            <span> <BiPhoneCall/> +37494673735, +37443333215</span>
            <span> <LuMailOpen/> magicalcompanyofficial@gmail.com</span>
          </div>
        </div>
    </div>
  )
}

export default FooterComponent