import React, { useState, useEffect } from 'react';
import ResumePDF from './Robert-Perillo-Res.pdf'
import LetterOfRec from './Letter-of-Rec.pdf'
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Resume.css'

const useStyles = makeStyles((theme) => ({
    root: {
        height: 120,
        marginBottom: 30
    },
    wrapper: {
        width: 100 + theme.spacing(2),
    },

}));


function Resume() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    useEffect(() => {
        try {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } catch (error) {
          window.scrollTo(0, 0);
        }
      }, []);


    return (
        <div id='resume-page'>
            <div className='letter-container'>
                <div className={classes.root}>
                    <div className={classes.wrapper}>
                        <FormControlLabel
                            control={<Switch checked={checked} onChange={handleChange} />}
                            label={checked ? "Show Resume" : "Show Letter of Recommendation"}
                        />
                    </div>
                </div>
            </div>
            <div className='flex-container'>
                <Slide direction="down" in={checked} mountOnEnter unmountOnExit timeout={400}>
                    <Paper elevation={4}>
                        <h3 className='flex-container title-font-3'>Letter of Recommendation</h3>
                        <img src='https://i.imgur.com/8lN2Shp.png' id='letter-img' alt='Roberts Letter of Recommendation'/>
                        <div id='letter-body'>
                            <object id='letter-obj' data={LetterOfRec} type="application/pdf">
                                <embed src={LetterOfRec} type="application/pdf" />
                            </object>
                        </div>
                    </Paper>
                </Slide>
            </div>
            <div className='flex-container'>
                <Slide direction="up" in={!checked} mountOnEnter unmountOnExit timeout={400}>
                    <Paper elevation={4}>
                        <h3 className='flex-container title-font-3'>Resume</h3>
                        <img src='https://i.imgur.com/J7YQmuE.png' id='resume-img' alt="Robert's Resume"/>
                        <div id='resume-body'>
                            <object id='resume-obj' data={ResumePDF} type="application/pdf">
                                <embed src={ResumePDF} type="application/pdf" />
                            </object>
                        </div>
                    </Paper>
                </Slide>
            </div>
        </div>
    )
}

export default Resume;
