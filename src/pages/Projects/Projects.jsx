import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './Projects.css'


const projectImages = [
    {
        laptopImg: 'https://i.imgur.com/aFXN6ZW.png',
        mobileImg: 'https://i.imgur.com/AEZyr7b.png',
        desc: 'D&D Character Manager. Track your character stats, spells, abilities, money and more! Pulls spell information from the D&D 5e Players Handbook API',
        logos: ['https://i.imgur.com/hWrPRuJ.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/GMHSzcr.png']
    },
    {
        laptopImg: 'https://i.imgur.com/cSkIKGT.png',
        mobileImg: 'https://i.imgur.com/X4MSt5Y.png',
        desc: 'Job Search Tracker! Track job application notes, company information, interest levels. Uses GitHubs jobs API to pull relevant job info.',
        logos: ['https://i.imgur.com/a6uI0Vs.png', 'https://i.imgur.com/IGsHeNw.png', 'https://i.imgur.com/znLwmfG.png', 'https://i.imgur.com/6xfuexp.png', 'https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/UHCbPD3.png']
    },
    {
        laptopImg: 'https://i.imgur.com/moxIop7.png',
        mobileImg: 'https://i.imgur.com/aOpRNab.png',
        desc: 'A gaming scheduling app. Sign up via google OAuth. Create friend groups and games within those groups. Then create polls of dates for your group members to vote on! Uses the Google Calendar API so that you can post an event date that was chosen by your friends.',
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/aajFadH.png']
    },
    {
        laptopImg: 'https://i.imgur.com/1Noyanj.png',
        mobileImg: 'https://i.imgur.com/YOTeiCy.png',
        desc: 'Mobile responsive slot machine.',
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/EnsYkPa.png']
    },
    {
        laptopImg: 'https://i.imgur.com/HrcV3nI.png',
        mobileImg: null,
        desc: 'A virtual dog show app. Allows you to sign in via google OAuth, create a dog profile to add your dog to competitions for users to vote.',
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/oyV9d35.png', 'https://i.imgur.com/MoLOBzA.png', 'https://i.imgur.com/u0fDtEb.png', 'https://i.imgur.com/p14Spbf.png', 'https://i.imgur.com/EnsYkPa.png']
    },
    {
        laptopImg: 'https://i.imgur.com/RpK5zxW.png',
        mobileImg: null,
        desc: 'Single Player RPG. Create your character, choose a set of skills, go adventure and if you get through the forest and mountains and beat all the creatures before you lose all your life, YOU WIN! ',
        logos: ['https://i.imgur.com/DCsmNit.png', 'https://i.imgur.com/EnsYkPa.png']
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
        <>
            <section className='empty-sec'></section>
            <div className='projects-container'>
                {projectImages.map((step, index) => (
                    <>
                    <section id='project'>
                        <div key={index}>
                            <Paper elevation={0} className='paper-img'>
                                <div className="flex-container project-imgs">
                                    <img className={classes.img} src={step.laptopImg} alt={`project ${index}`} />
                                    {step.mobileImg === null ? null
                                        : <img className={classes.img} className='mobile-img' src={step.mobileImg} alt={`mobile project ${index}`} />}
                                </div>
                            </Paper>
                            <Paper elevation={0} className='paper-desc'>
                                <p className='descriptions'>{step.desc}</p>
                            </Paper>
                            <Paper elevation={0} className='paper-logos'>
                                <div className='logos'>
                                    {step.logos.map(logo =>
                                        <img src={logo} />
                                    )}
                                </div>
                            </Paper>
                            {/* <hr className={index % 2 === 0 ? 'left' : 'right'} /> */}
                        </div>
                    </section>
                    <section className='empty-sec'></section>
                    </>
            ))}
            </div>
        </>
    )
}

export default Projects;