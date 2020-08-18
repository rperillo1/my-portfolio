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
          <img src="https://i.imgur.com/Ptk7n58.png" alt="" className='profile-img' />
        </Paper>
      </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
      <div className='flex-container'>
        <Paper elevation={3} className={`${classes.root} profile-text`}>
          <div className='text-font'>
            Audio Engineer turned Software Developer.
            Through project experience using JavaScript, Node, Express, React, RESTful APIs, HTML and CSS, I have developed a zeal for building efficient web applications.
            I thrive on constructive criticism and value empathy, accountability and transparency in a workplace.
            I work well in team environments and respect the time that people give to me to further my knowledge base.
            As a side gig, I create music, work with sound design and geek out on all things audio!
            </div>
        </Paper>
      </div>
    </>
  );
}
