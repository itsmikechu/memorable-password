import React, { Component } from 'react';
import logo from '../images/logo.svg'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} className="logo" alt="logo" />
                <h2>Memorable Password</h2>
            </div>
        )
    }
} 

export default Header;