import React, { Component } from 'react';
import logo from '../images/logo.svg'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <a href="https://github.com/sevhn/memorable-password" target="repo">
                    <i className="fa fa-github fa-2x"></i>
                </a>
            </div>
        )
    }
}

export default Footer;