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
            <SpotifyCard />
        </main>
    )
}

export default Profile;
