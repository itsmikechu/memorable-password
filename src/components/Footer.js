import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div>Once this page is loaded, you can disconnect from the Internet while you create passwords.</div>
                <a href="https://github.com/itsmikechu/memorable-password" target="repo">
                    <i className="fa fa-github fa-2x"></i>
                </a>
            </div> 
        )
    }
}

export default Footer;