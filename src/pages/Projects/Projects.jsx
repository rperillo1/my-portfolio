import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import './ProjectSlides.css'


const projectImages = [
    {
        laptopImg: 'https://i.imgur.com/aFXN6ZW.png',
        mobileImg: 'https://i.imgur.com/AEZyr7b.png',
        desc: 'D&D Character Manager. Track your character stats, spells, abilities, money and more! Technologies: Node, Express, React, MongoDB, Mongoose, HTML, CSS, Bootstrap, D&D 5e Players Handbook API',
        logos: ['https://i.imgur.com/hWrPRuJ.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/P2DsTfc.png']
    },
    {
        laptopImg: 'https://i.imgur.com/cSkIKGT.png',
        mobileImg: 'https://i.imgur.com/X4MSt5Y.png',
        desc: 'Job Search Tracker! Track job application notes, company information, interest levels. Technologies: Python, Django, PostgreSQL, VueJs, Github Jobs API, HTML, CSS',
        logos: ['https://i.imgur.com/a6uI0Vs.png', 'https://i.imgur.com/IGsHeNw.png', 'https://i.imgur.com/Oj5G0sZ.png', 'https://i.imgur.com/4aLfsJU.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/UHCbPD3.png']
    },
    {
        laptopImg: 'https://i.imgur.com/moxIop7.png',
        mobileImg: 'https://i.imgur.com/aOpRNab.png',
        desc: 'A gaming scheduling app. Sign up via google OAuth. Create friend groups and games within those groups. Then create polls of dates for your group members to vote on! Technologies: Express, Node, Mongoose, MongoDB, EJS, HTML, CSS, Materialize, Google Calendar API',
        logos: []
    },
    {
        laptopImg: 'https://i.imgur.com/1Noyanj.png',
        mobileImg: 'https://i.imgur.com/YOTeiCy.png',
        desc: 'Mobile responsive slot machine made with vanilla JavaScript, HTML & CSS',
        logos: []
    },
    {
        laptopImg: 'https://i.imgur.com/HrcV3nI.png',
        mobileImg: null,
        desc: 'A virtual dog show app. Allows you to sign in via google OAuth, create a dog profile yout dog to competitions for people to vote. Technologies: Express, Node, EJS templates, Javascript, Mongoose, MongoDB, HTML, CSS',
        logos: []
    },
    {
        laptopImg: 'https://i.imgur.com/RpK5zxW.png',
        mobileImg: null,
        desc: 'Single Player RPG made with vanilla JavaScript, HTML, CSS (Grid, FLexbox, Bootstrap)',
        logos: []
    },
]


const useStyles = makeStyles((theme) => ({
    img: {
        display: 'block',
        maxWidth: 800,
        overflow: 'hidden',
        width: '100%',
    }
}));

function Projects() {
    const classes = useStyles();

    return (
        <div>
            {projectImages.map((step, index) => (
                <div key={index}>
                    <div className="flex-container">
                        <img className={classes.img} src={step.laptopImg} alt={`project ${index}`} />
                        {step.mobileImg === null ? null
                            : <img className={classes.img} className='mobile-img' src={step.mobileImg} alt={`mobile project ${index}`} />}
                    </div>
                    <p>{step.desc}</p>
                     { step.logos.map(logo => 
                        <img src={logo} className='' />
                    )}
                </div>
            ))}
        </div>
    )
}

export default Projects;