import React from 'react';
import './AppHeader.css';
import {NavLink} from "react-router-dom";
import * as Scroll from 'react-scroll';


const AppHeader = () => {

    var scroll = Scroll.animateScroll;
    function scrollToBottom() {
        scroll.scrollToBottom();
    }

    return (
        <header className="app-header">
            <div className="container pd-13">
                <nav className='header-nav d-flex align-items-center'>
                    <ul className="nav-list d-flex align-items-center">
                        <li className="nav-list-item "><NavLink to='/teachers/'>УЧИТЕЛЯ</NavLink></li>
                        <li className="nav-list-item" onClick={scrollToBottom}>КОНТАКТЫ</li>
                    </ul>
                    <NavLink to="/" className="nav-list-item logo-name">APOLLO</NavLink>
                    <ul className="nav-list d-flex align-items-center">
                        <li className="nav-list-item"><NavLink to="/auth/login">ВОЙТИ</NavLink></li>
                        <li className="nav-list-item  text-border"><NavLink to="/auth/register">РЕГИСТРАЦИЯ</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
