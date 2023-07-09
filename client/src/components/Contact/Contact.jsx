import React from 'react'
import "./Contact.scss"
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from '@mui/material';

function Contact() {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <span>BE IN TOUCH WITH US:</span>
        <div className='mail'>
          <input type='text' placeholder='Enter your e-mail...' />
          <button>JOIN US</button>
        </div>
        <div className='icons'>
          <Link href='https://www.youtube.com/@Apple' target='_blank' rel="noopener noreferrer" style={{color: 'white'}}>
            <YouTubeIcon />
            </Link>
            <Link href='https://www.instagram.com/apple/' target='_blank' rel="noopener noreferrer" style={{color: 'white'}}>
            <InstagramIcon />
            </Link>
            <Link href='https://twitter.com/Apple' target='_blank' rel="noopener noreferrer" style={{color: 'white'}}>
            <TwitterIcon />
            </Link>
            <GoogleIcon />
            <PinterestIcon />
        </div>
      </div>
    </div>
  )
}

export default Contact