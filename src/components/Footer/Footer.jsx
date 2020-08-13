import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Footer.css'

function Footer() {
    return (
        <div>
            <div id='footer-links'>
                <div className='flex-container'>
                    <h1 className='title-font-2'>=></h1>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className='title-font-2' to='/profile'><h1>Profile</h1></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className='title-font-2' to='/resume'><h1>Resume</h1></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className='title-font-2' to='/portfolio'><h1>Projects</h1></Link>
                </div>
            </div>
            <div id='footer-contact'>
                <h3 className='title-font-3'>Connect With Me :</h3>
                <h2 className='title-font-2'>perillo.robert@gmail.com</h2>
                <div id='link-container'>
                    <LinkedInIcon />
                    <GitHubIcon />
                </div>
            </div>
        </div>
    )
}

export default Footer;