import React from "react";
import './ProjectImages.css'

const projectImages = [
    {
        laptopImg: 'https://i.imgur.com/aFXN6ZW.png',
        mobileImg: 'https://i.imgur.com/AEZyr7b.png',
        desc: 'D&D Character Manager. Track your character stats, spells, abilities, money and more! Technologies: Node, Express, React, MongoDB, HTML, CSS, Bootstrap, D&D 5e Players Handbook API'
    },
    {
        laptopImg: 'https://i.imgur.com/DQLWshv.png',
        mobileImg: 'https://i.imgur.com/X4MSt5Y.png',
        desc: 'Job Search Tracker! Track job application notes, company information, interest levels. Technologies: Python, Django, PostgreSQL, VueJs, Github Jobs API, HTML, CSS'
    },
    {
        laptopImg: 'https://i.imgur.com/moxIop7.png',
        mobileImg: 'https://i.imgur.com/aOpRNab.png',
        desc: 'A gaming scheduling app. Sign up via google OAuth. Create friend groups and games within those groups. Then create polls of dates for your group members to vote on! Technologies: Express, Node, Mongoose, MongoDB, EJS, HTML, CSS, Materialize, Google Calendar API'
    },
    {
        laptopImg: 'https://i.imgur.com/1Noyanj.png',
        mobileImg: 'https://i.imgur.com/YOTeiCy.png',
        desc: 'Mobile responsive slot machine made with vanilla JavaScript, HTML & CSS'
    },
    {
        laptopImg: 'https://i.imgur.com/HrcV3nI.png',
        mobileImg: null,
        desc: 'A virtual dog show app. Allows you to sign in via google OAuth, create a dog profile yout dog to competitions for people to vote. Technologies: Express, Node, EJS templates, Javascript, Mongoose, MongoDB, HTML, CSS '
    },
    {
        laptopImg: 'https://i.imgur.com/RpK5zxW.png',
        mobileImg: null,
        desc: 'Single Player RPG made with vanilla JavaScript, HTML, CSS (Grid, FLexbox, Bootstrap)'
    },
]


function ProjectImages() {
    return (
        <>
            {projectImages.map(project =>
                <div className='flex-container'>
                    <img src={project.laptopImg} className='laptop-img'></img>
                    <img src={project.mobileImg} className='mobile-img'></img>
                </div>
            )}
        </>
    )
}

export default ProjectImages;