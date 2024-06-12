import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import Alarms from './messages/Alarms';
import Site from './site/Site'
import Information from './messages/Information';
import SignedIn from './messages/SignedIn';

const Header = () => (
    <header className={classes.header}>
        <div className={classes.logoAndAlarms}>
            <div className={classes.logo}>
                <Link to="/">React</Link>
            </div>
            <Alarms />
        </div>
        <div className={classes.rightSection}>
            <Site />
            <Information />
            <SignedIn />
        </div>
    </header>
);

export default Header;
