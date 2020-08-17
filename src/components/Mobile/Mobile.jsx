import React from "react";
import './Mobile.css'


const mobileImages = [
    'https://i.imgur.com/z4H91u7.png',
    'https://i.imgur.com/P8LNSNy.png',
    'https://i.imgur.com/i6iKxgv.png',
    'https://i.imgur.com/dHy7Kde.png'
]

function Mobile() {
    return (
        <>
        <div className='mobile-div flex-container'>
            <img src={mobileImages[1]} className='mobile-img'></img>
        </div>
        </>
    )
}

export default Mobile;