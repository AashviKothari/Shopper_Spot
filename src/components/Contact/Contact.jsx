import React from 'react'
import './Contact.scss'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <span>GET IN TOUCH</span>
        <div className='mail'>
            <input type='text' placeholder='Enter your Email'/>
            <button>Send</button>
        </div>
        <div className='icons'>
            <div className='icon'>
                <FacebookIcon/>
            </div>
            <div className='icon'>
                <InstagramIcon/>
            </div>
            <div className='icon'>
                <TwitterIcon/>
            </div>
            <div className='icon'>
                <GoogleIcon/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
