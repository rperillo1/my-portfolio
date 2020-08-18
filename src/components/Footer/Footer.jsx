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
                    <h1 className='title-font-2'>=></h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className='title-font-2' to='/about'><h1>About</h1></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className='title-font-2' to='/resume'><h1>Resume</h1></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className='title-font-2' to='/projects'><h1>Projects</h1></Link>
                </div>
            </div>
            <div id='footer-contact'>
                <h3 className='title-font-3 desktop-text'>Connect With Me :</h3>
                <h2 className='title-font-2 desktop-text'>perillo.robert@gmail.com</h2>
                <div id='link-container'>
                    <h3 className='title-font-3 mobile-text'>Connect:</h3>
                    <a target="_blank" href="https://www.linkedin.com/in/robertperillo/">
                    <LinkedInIcon className='mobile-text'/>
                    </a>
                    <a target="_blank" href="https://github.com/rperillo1">
                    <GitHubIcon className='mobile-text'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;