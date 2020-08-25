import React from 'react';
import './Projects.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Paper from '@material-ui/core/Paper';



const projectInfo = [
    {
        title: 'D&D Character Manager',
        desc: 'Track your character stats, spells, abilities, money and more! Pulls spell data from the D&D 5e Players Handbook API',
        images: ['https://i.imgur.com/HhC4id5.png', 'https://i.imgur.com/UV8TLtf.png', 'https://i.imgur.com/ym0NygY.png', 'https://i.imgur.com/JMPTHyI.png'],
        logos: ['https://i.imgur.com/hWrPRuJ.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/GMHSzcr.png']
    },
    {
        title: 'Job Search Tracker (JST)',
        desc: 'Track job application notes, company information, interest levels and associated interviews. Uses GitHubs jobs API to pull relevant job info.',
        images: ['https://i.imgur.com/dLMfXWT.png', 'https://i.imgur.com/ea0gWwf.png', 'https://i.imgur.com/ckx6qYS.png', 'https://i.imgur.com/XndUofw.png'],
        logos: ['https://i.imgur.com/a6uI0Vs.png', 'https://i.imgur.com/IGsHeNw.png', 'https://i.imgur.com/znLwmfG.png', 'https://i.imgur.com/6xfuexp.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/UHCbPD3.png']

    },
    {
        title: 'Gaming Time - a scheduling app',
        desc: 'Sign up via google OAuth. Create friend groups and games within those groups. Then create polls of dates for your group members to vote on! Uses the Google Calendar API so that you can post an event date that was chosen by your friends.',
        images: ['https://i.imgur.com/MOgIOuX.png', 'https://i.imgur.com/mXwEbla.png', 'https://i.imgur.com/2Df5gPe.png', 'https://i.imgur.com/cESnvUk.png'],
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/aajFadH.png']
    },
    {
        title: 'The Goodest Doggo',
        desc: 'A virtual dog show app. Allows you to sign in via google OAuth, create a dog profile to add your dog to competitions for users to vote.',
        images: ['https://i.imgur.com/DkOcPNV.jpg', 'https://i.imgur.com/OiRb12d.jpg', 'https://i.imgur.com/WLYctaG.jpg', 'https://i.imgur.com/KDsBMX6.png'],
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/EnsYkPa.png']

    },
    {
        title: 'Field of Battle',
        desc: 'Single Player RPG. Create your character, choose a set of skills, go adventure and if you get through the forest and mountains and beat all the creatures before you lose all your life, YOU WIN! ',
        images: ['https://i.imgur.com/ICISstu.png', 'https://i.imgur.com/GqnHcq6.png', 'https://i.imgur.com/oVv2kFq.png', 'https://i.imgur.com/Jnxg7OG.png', 'https://i.imgur.com/JM7Jjso.png', 'https://i.imgur.com/IutcTxe.png'],
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/EnsYkPa.png']
    },
    {
        title: 'Neon Jungle Slots',
        desc: 'Mobile responsive slot machine.',
        images: ['https://i.imgur.com/UHglaq9.png'],
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/EnsYkPa.png']
    },
]

function Projects() {

    return (
        <div id='project-main'>
            {projectInfo.map((project, idx) =>
            <div className='project' id={idx % 2 === 0 ? 'left' : 'right'}>
                <div className='carousel' >
                    <h1 id='title'>{project.title}</h1>
                    <div>
                        <Carousel autoPlay={true} infiniteLoop={true} showIndicators={true}>
                            {project.images.map(image =>
                                <div>
                                    <img src={image} />
                                </div>
                            )}
                        </Carousel>
                    </div>
                    <Paper elevation={4} className='paper-desc'>
                    <p>{project.desc}</p>
                    </Paper>
                </div>
                <Paper elevation={4} className='paper-logos'>
                    { project.logos.map(logo =>
                            <img src={logo} className='logo'></img>
                    )}
                </Paper>    
            </div>
            )}
        </div>
    )
}

export default Projects;


// const projectImages = [
//     {
//         laptopImg: 'https://i.imgur.com/aFXN6ZW.png',
//         mobileImg: 'https://i.imgur.com/AEZyr7b.png',
//         desc: 'D&D Character Manager. Track your character stats, spells, abilities, money and more! Pulls spell information from the D&D 5e Players Handbook API',
//         logos: ['https://i.imgur.com/hWrPRuJ.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/GMHSzcr.png']
//     },
//     {
//         laptopImg: 'https://i.imgur.com/cSkIKGT.png',
//         mobileImg: 'https://i.imgur.com/X4MSt5Y.png',
//         desc: 'Job Search Tracker! Track job application notes, company information, interest levels. Uses GitHubs jobs API to pull relevant job info.',
//         logos: ['https://i.imgur.com/a6uI0Vs.png', 'https://i.imgur.com/IGsHeNw.png', 'https://i.imgur.com/znLwmfG.png', 'https://i.imgur.com/6xfuexp.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/UHCbPD3.png']
//     },
//     {
//         laptopImg: 'https://i.imgur.com/moxIop7.png',
//         mobileImg: 'https://i.imgur.com/aOpRNab.png',
//         desc: 'A gaming scheduling app. Sign up via google OAuth. Create friend groups and games within those groups. Then create polls of dates for your group members to vote on! Uses the Google Calendar API so that you can post an event date that was chosen by your friends.',
//         logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/aajFadH.png']
//     },
//     {
//         laptopImg: 'https://i.imgur.com/1Noyanj.png',
//         mobileImg: 'https://i.imgur.com/YOTeiCy.png',
//         desc: 'Mobile responsive slot machine.',
//         logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/EnsYkPa.png']
//     },
//     {
//         laptopImg: 'https://i.imgur.com/HrcV3nI.png',
//         mobileImg: null,
//         desc: 'A virtual dog show app. Allows you to sign in via google OAuth, create a dog profile to add your dog to competitions for users to vote.',
//         logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/EnsYkPa.png']
//     },
//     {
//         laptopImg: 'https://i.imgur.com/RpK5zxW.png',
//         mobileImg: null,
//         desc: 'Single Player RPG. Create your character, choose a set of skills, go adventure and if you get through the forest and mountains and beat all the creatures before you lose all your life, YOU WIN! ',
//         logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/EnsYkPa.png']
//     },
// ]


