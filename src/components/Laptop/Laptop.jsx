import React from "react";
import './Laptop.css'

const laptopImages = [
    'https://i.imgur.com/1Noyanj.png',
    'https://i.imgur.com/RpK5zxW.png',
    'https://i.imgur.com/aFXN6ZW.png',
    'https://i.imgur.com/DQLWshv.png',
    'https://i.imgur.com/HrcV3nI.png',
    'https://i.imgur.com/moxIop7.png',
]

const mobileImages = [
    'https://i.imgur.com/z4H91u7.png',
    'https://i.imgur.com/P8LNSNy.png',
    'https://i.imgur.com/i6iKxgv.png',
    'https://i.imgur.com/dHy7Kde.png'
]

function Laptop() {
    return (
        <>
        <div className='laptop-div flex-container'>
            <img src={laptopImages[1]} className='laptop-img'></img>
        </div>
        <div className='mobile-div flex-container'>
            <img src={mobileImages[1]} className='laptop-img'></img>
        </div>
        </>
    )
}

export default Laptop;