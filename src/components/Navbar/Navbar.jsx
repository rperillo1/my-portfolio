import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DvrIcon from '@material-ui/icons/Dvr';
import './Navbar.css'


function Navbar() {
    const [state, setState] = useState({
        menu: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, menu: open });
    };

    const list = () => (
        <div
            style={{ width: '80vmin' }}
            onClick={toggleDrawer('menu', false)}
            onKeyDown={toggleDrawer('menu', false)}
        >
            <List>
                {['Projects', 'Resume', 'Profile'].map((text, idx) => (
                    <Link exact to={`/${text}`} className='menu-links'>
                        <ListItem button key={text} className='menu-items'>
                            {idx === 0 ? <DvrIcon /> : ''}
                            {idx === 1 ? <AssignmentIcon /> : ''}
                            {idx === 2 ? <AssignmentIndIcon /> : ''}
                            <ListItemText primary={text} className='menu-item' />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <div id='menuToggle' onClick={toggleDrawer(true)}
                className={`menu-btn ${state['menu'] ? 'open' : ''} `}>
                <div
                    className={`menu-btn_burger ${state['menu'] ? 'open' : ''} `}>
                </div>
            </div>
            <Drawer anchor={'menu'} open={state['menu']} onClose={toggleDrawer(false)} className='drawer'>
                {list('menu')}
            </Drawer>
        </div>
    );
}

export default Navbar;