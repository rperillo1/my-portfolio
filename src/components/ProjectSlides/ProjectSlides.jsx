import React, { useState, useEffect } from "react";
import './ProjectSlides.css'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import useToggle from '../../hooks/useToggle'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const projectImages = [
    {
        laptopImg: 'https://i.imgur.com/aFXN6ZW.png',
        mobileImg: 'https://i.imgur.com/AEZyr7b.png',
        desc: 'D&D Character Manager. Track your character stats, spells, abilities, money and more! Technologies: Node, Express, React, MongoDB, HTML, CSS, Bootstrap, D&D 5e Players Handbook API'
    },
    {
        laptopImg: 'https://i.imgur.com/cSkIKGT.png',
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


const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: 150,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        display: 'block',
        maxWidth: 800,
        overflow: 'hidden',
        width: '100%',
    },
}));

function ProjectSlides() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = projectImages.length;
    const [autoplay, toggleAutoplay] = useToggle(false)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {
        const loading = setTimeout(function () {
            toggleAutoplay();
        }, 7000);
        return () => clearTimeout(loading)
      }, [])

    return (
        <div className='flex-container'>
            <div className={classes.root}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    interval={4800}
                    autoplay={autoplay}
                >
                    {projectImages.map((step, index) => (
                        <div key={index}>
                                <div className="flex-container">
                                    <img className={classes.img} src={step.laptopImg} alt={`project ${index}`}/>
                                    {step.mobileImg === null ? null
                                    : <img className={classes.img} className='mobile-img' src={step.mobileImg} alt={`mobile project ${index}`}/>}
                                </div>
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                        </Button>
                    }
                />
            </div>
        </div>
    )
}

export default ProjectSlides;
