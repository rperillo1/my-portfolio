import React from 'react';
import { Link } from 'react-router-dom'
import './CheckWorkButton.css'

function CheckWorkButton() {
    return (
        <div className="box">
        <Link to="/projects" className='title-font-4'> 
            <div className="btn btn-two">
                <span id='btn-text'>See My Work</span>
            </div>
        </Link>
        </div>
    )
}

export default CheckWorkButton;

