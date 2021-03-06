import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

function Footer() {
    return (
        <div id='footer'>
            <div id='footer-links'>
                <div className='flex-container'>
                    <h1 className='title-font-2 desktop-text'>=></h1>
                    &nbsp;&nbsp;&nbsp;
                    <Link className='title-font-2' to='/'><h1 className='desktop-text footer-link'>About</h1></Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link className='title-font-2' to='/resume'><h1 className='desktop-text footer-link'>Resume</h1></Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link className='title-font-2' to='/projects'><h1 className='desktop-text footer-link'>Projects</h1></Link>
                </div>
            </div>
            <div id='footer-contact'>
                <h3 className='title-font-3 desktop-text'>Connect With Me :</h3>
                <a href='mailto:perillo.robert@gmail.com' id='email-link'><h2 className='title-font-2 desktop-text'>perillo.robert@gmail.com</h2></a>
                <div id='link-container'>
                    <h3 className='title-font-3 mobile-text'>Connect:</h3>
                    <a target="_blank" href="https://www.linkedin.com/in/robertperillo/" rel="noopener noreferrer">
                        <LinkedInIcon className='mobile-text footer-link' />
                    </a>
                    <a target="_blank" href="https://github.com/rperillo1" rel="noopener noreferrer">
                        <GitHubIcon className='mobile-text footer-link' />
                    </a>
                    <a href='mailto:perillo.robert@gmail.com' id='mobile-link'><h2 className='title-font-2'>Send Email</h2></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;