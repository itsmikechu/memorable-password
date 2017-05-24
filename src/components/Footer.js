import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <a href="https://github.com/itsmikechu/memorable-password" target="repo">
                    <i className="fa fa-github fa-2x"></i>
                </a>
            </div> 
        )
    }
}

export default Footer;