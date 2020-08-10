import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
            style={{ width: '300px' }}
            onClick={toggleDrawer('menu', false)}
            onKeyDown={toggleDrawer('menu', false)}
        >
            <List>
                {['Projects', 'Resume', 'Profile'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <div id='menuToggle' onClick={toggleDrawer(true)} className={`menu-btn 
         ${state['menu'] ? 'open' : ''  } ` }
        >
                <div class="menu-btn_burger"></div>
            </div>

            <Drawer anchor={'menu'} open={state['menu']} onClose={toggleDrawer(false)}>
                {list('menu')}
            </Drawer>
        </div>
    );
}

export default Navbar;