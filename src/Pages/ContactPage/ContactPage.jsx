import React from 'react'
import './ContactPage.css'
import { useState } from 'react'
import { FiMapPin } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMailOpen } from 'react-icons/hi';


const ContactPage = () => {

const [menu,setMenu] = useState(false);




   return (
    <div className='contact-page'>
        <div className='contact-page-btt'>
            <button onClick={()=>setMenu(false)}     id={menu ? 'contact-btt-none' : ''}>Contact Us</button>
            <button onClick={()=>setMenu(true)}  id={menu ? '' : 'contact-btt-none'}>Join Our Team</button>
        </div>
        {menu ? (
            <div className='contact-page-div2'>
                 <div className='contact-page-div2-div1'>
                    <div className='cont-page-div1-info'>
                        <h2>Want to join our team? Send us your cover letter and resume *</h2>
                    </div>
            
                    <form>
                        <div>
                            <span>Full Name:</span>
                            <input type="text" />
                        </div>
                        <div>
                            <span>Phone:</span>
                            <input type="text" />
                        </div>
                        <div>
                            <span>Email:</span>
                            <input type="email" />
                        </div>
                        <div>
                            <span>Vacant position:</span>
                            <input type="text" />
                        </div>
                        <input type="file" id='file_contact' style={{display: 'none'}} />
                        <div>
                            <span>Upload Your CV:</span>
                            <label htmlFor='file_contact'>
                                <div id='file_contact_div'>Choose File</div>
                            </label>
                        </div>
                        <div>
                            <span>Cover Letter:</span>
                            <textarea  cols="30" rows="10"></textarea>

                        </div>
                        <button>Submit</button>
                    </form>
                </div>
                <div className='contact-page-div2-div2'>
                    <div>
                        <h1>Work at Magical -who are we and who are we looking for?</h1>
                        <p>
                            Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout.
                            <br /><br />
                            Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately.
                            <br /><br />
                            Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately.
                            <br /><br />                  
                        </p>
                    </div>
                </div>   
            </div>
        ) : (
            <div className='contact-page-div2'>
                <div className='contact-page-div2-div1'>
                    <div className='cont-page-div1-info'>
                        <h2><FiMapPin /> Sevan, Armenia</h2>
                        <h2><FiPhoneCall /> +37443333215, +37494673735</h2>
                        <h2><HiOutlineMailOpen /> magicalcompanyofficial@gmail.com</h2>
                    </div>
            
                    <form>
                        <div>
                            <span>Full Name:</span>
                            <input type="text" />
                        </div>
                        <div>
                            <span>Country:</span>
                            <input type="text" />
                        </div>
                        <div>
                            <span>Email:</span>
                            <input type="email" />
                        </div>
                        <div>
                            <span>Message:</span>
                            <textarea  cols="30" rows="10"></textarea>

                        </div>
                        <button>Submit</button>
                    </form>
                    
                </div>
                <div className='contact-page-div2-div2'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.6404736613354!2d44.96404546656746!3d40.54953154967397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404046c7427c1fc7%3A0xaf46d8917c527ea0!2s11%2C%20179%20Nairyan%20St%2C%20Sevan!5e0!3m2!1sru!2sam!4v1698059539101!5m2!1sru!2sam" width="800" height="640" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>                
            </div>
        )}
    </div>
  )
}

export default ContactPage