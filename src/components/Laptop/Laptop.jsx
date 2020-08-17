import React from "react";
import './Laptop.css'

const laptopImages = [
    {img: 'https://i.imgur.com/1Noyanj.png', desc: 'Mobile responsive slot machine made with vanilla JavaScript, HTML & CSS'},
    'https://i.imgur.com/RpK5zxW.png',
    'https://i.imgur.com/aFXN6ZW.png',
    'https://i.imgur.com/DQLWshv.png',
    'https://i.imgur.com/HrcV3nI.png',
    'https://i.imgur.com/moxIop7.png',
]

function Laptop() {
    return (
        <>
        <div className='laptop-div flex-container'>
            <img src={laptopImages[0]} className='laptop-img'></img>
        </div>
        </>
    )
}

export default Laptop;