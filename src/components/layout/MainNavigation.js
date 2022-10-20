import React from 'react'
import { Link } from 'react-router-dom'
// import classes from './MainNavigation.module.css'
import Header from './StyleMainNavigation'
import styled from 'styled-components';

function MainNavigation({className}) {
    return (
        <Header className={className} color='#ecd7b3'>
            <div className="">React Meetups</div>
            <ul>
                <li>
                    <Link to="/">AllMeetUps</Link>
                </li>
                <li>
                    <Link to="/new-meetup">Add New Meetup</Link>
                </li>
                <li>
                    <Link to="/favorites">My Favorites</Link>
                </li>
            </ul>
        </Header>
    )
}

export default MainNavigation