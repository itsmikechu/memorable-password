import React, { Component } from 'react';
import logo from '../images/logo.svg'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} className="logo" alt="logo" />
                <h1>Memorable Password</h1>
                <h3>Create a more-secure, memorable password.</h3>
            </div>
        )
    }
} 

export default Header;