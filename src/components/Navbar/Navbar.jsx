import React, { Component } from 'react';
import logo from '../../imgs/logo.svg';
import menu from '../../imgs/menu.svg';
import './Navbar.scss'

export default class Navbar extends Component { 
    render() {
        return (
            <div id='Navbar'>
                <img id='logo' src={logo} alt='Overwatch Logo'></img>
                <img id='menu-button' src={menu} alt='Menu'></img>
            </div>
        )
    }
}
