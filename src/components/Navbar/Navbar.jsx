import React, { Component } from 'react';
import logo from '../../imgs/logo.svg'; 
import './Navbar.scss'

export default class Navbar extends Component { 
    render() {
        return (
            <div id='Navbar'>
                <img src={logo} alt='Overwatch Logo'></img>
            </div>
        )
    }
}
