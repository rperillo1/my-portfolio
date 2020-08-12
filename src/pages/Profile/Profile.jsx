import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import SpotifyCard from '../../components/SpotifyCard/SpotifyCard'
import './Profile.css'


const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    wrapper: {
        width: 100 + theme.spacing(2),
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
    }
}));



function Profile() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <main id='profile-main'>
            <ProfileCard />
            {/* <div className='flex-container'>
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
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                    <Paper elevation={4} className={classes.paper}>
                        <img className='letter-img' src="https://i.imgur.com/H3cMhhj.png" alt="recommendation-letter" />
                    </Paper>
                </Slide>
            </div> */}
            <SpotifyCard />
        </main>
    )
}

export default Profile;
