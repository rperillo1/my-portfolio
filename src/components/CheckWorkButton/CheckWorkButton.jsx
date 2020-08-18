import React from 'react';
import { Link } from 'react-router-dom'
import './CheckWorkButton.css'

function CheckWorkButton() {
    return (
        <Link to="/projects" className='title-font-2'> 
        <div class="box">
            <div class="btn btn-two">
                <h1>Check My Work</h1>
            </div>
        </div>
        </Link>
    )
}

export default CheckWorkButton;

