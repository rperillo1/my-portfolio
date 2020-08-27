import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Slide from '@material-ui/core/Slide';
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
                {['Projects', 'Resume', 'About'].map((text, idx) => (
                    <Link exact to={`/${text}`} className='menu-links'>
                        <ListItem button key={text} className='menu-items'>
                            <ListItemIcon id='icons'>
                                {idx === 0 ? <DvrIcon /> : ''}
                                {idx === 1 ? <AssignmentIcon /> : ''}
                                {idx === 2 ? <AssignmentIndIcon /> : ''}
                            </ListItemIcon>
                            <ListItemText disableTypography primary={text} className='menu-item title-font-2' />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <div className='flex-container nav-name'>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1200}>
                    <h1 className='title-font'>Robert</h1>
                </Slide>
                &nbsp;&nbsp;&nbsp;
                <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={2300}>
                    <h1 className='title-font'>Perillo</h1>
                </Slide>
            </div>
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