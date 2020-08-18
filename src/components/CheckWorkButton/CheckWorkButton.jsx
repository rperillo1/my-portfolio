import React from 'react';
import { Link } from 'react-router-dom'
import './CheckWorkButton.css'

function CheckWorkButton() {
    return (
        <div class="box">
        <Link to="/projects" className='title-font-4'> 
            <div class="btn btn-two">
                <span id='btn-text'>Check My Work</span>
            </div>
        </Link>
        </div>
    )
}

export default CheckWorkButton;

