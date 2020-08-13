import React, { useState } from 'react';
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


    return (
        <div id='resume-page'>
            <div className='letter-container'>
                <div className={classes.root}>
                    <div className={classes.wrapper}>
                        <FormControlLabel
                            control={<Switch checked={checked} onChange={handleChange} />}
                            label="Show Letter of Recommendation"
                        />
                    </div>
                </div>
            </div>
            <div className='flex-container'>
                <Slide direction="left" in={checked} mountOnEnter unmountOnExit
                    {...(true ? { timeout: 800 } : {})}
                >
                    <Paper elevation={4}>
                        <body>
                            <object id='resume-obj' data={LetterOfRec} type="application/pdf">
                                <embed src={LetterOfRec} type="application/pdf" />
                            </object>
                        </body>
                    </Paper>
                </Slide>
            </div>
            <div>
                <h1 className='flex-container title-font-3'>Resume</h1>
                <html className='flex-container'>
                    <body>
                        <object id='resume-obj' data={ResumePDF} type="application/pdf">
                            <embed src={ResumePDF} type="application/pdf" />
                        </object>
                    </body>
                </html>
            </div>
        </div>
    )
}

export default Resume;
