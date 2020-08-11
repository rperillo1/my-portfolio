import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DvrIcon from '@material-ui/icons/Dvr';
import useToggle from '../../hooks/useToggle'
import './Navbar.css'


function Navbar() {
    const [drawer, toggleDrawer] = useToggle(false)

    const list = () => (
        <div
            style={{ width: '80vmin' }}
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <List>
                {['Projects', 'Resume', 'Profile'].map((text, idx) => (
                    <Link exact to={`/${text}`} className='menu-links'>
                        <ListItem button key={text} className='menu-items'>
                            <ListItemIcon>
                            {idx === 0 ? <DvrIcon /> : ''}
                            {idx === 1 ? <AssignmentIcon /> : ''}
                            {idx === 2 ? <AssignmentIndIcon /> : ''}
                            </ListItemIcon>
                            <ListItemText primary={text} className='menu-item' />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <div id='menuToggle' onClick={() => toggleDrawer(true)}
                className={`menu-btn ${drawer ? 'open' : ''} `}>
                <div
                    className={`menu-btn_burger ${drawer ? 'open' : ''} `}>
                </div>
            </div>
            <Drawer anchor={'menu'} open={drawer} onClose={() => toggleDrawer(false)} className='drawer'>
                {list('menu')}
            </Drawer>
        </div>
    );
}

export default Navbar;