import React from "react";
import './Laptop.css'

function Laptop() {
    return (
        <div className='laptop-div'>
                <h3>Project</h3>
            <div className='laptop'>
                <img src="https://www.bebold.ch/img/home/macbook-white.png" alt="MacBook Computer Apple" className='computer'></img>
                <img src="https://i.imgur.com/DssLnVi.png" className='inside-img'></img>
                {/* <div className='inside-img'></div> */}
            </div>
        </div>
    )
}

export default Laptop;