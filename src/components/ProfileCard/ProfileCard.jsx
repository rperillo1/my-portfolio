import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    borderRadius: 8,
  }
});


export default function ProfileCard() {
  const classes = useStyles();

  return (
    <>
      <div className='flex-container'>
        <Paper elevation={3} className={classes.root}>
          <img src='/profile-img.png' alt="" className='profile-img' />
        </Paper>
      </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
      <div className='flex-container'>
        <Paper elevation={3} className={`${classes.root} profile-text`}>
          <div className='text-font'>
            Audio Engineer turned Software Developer.
            I have developed multiple projects using JavaScript, Node, Express, React, Django, Python, RESTful APIs, HTML and CSS. 
            I thrive on constructive criticism and value accountability and transparency in a workplace.
            I am looking for work as a Junior Software Developer paired with some form of mentorship.
            As a side gig, I create music, work with sound design and geek out on all things audio!
            </div>
        </Paper>
      </div>
    </>
  );
}
