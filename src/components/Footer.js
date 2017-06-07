import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div>Once this page is loaded, you can disconnect from the Internet while you create passwords.</div>
                <div>Google Analytics in use for the purpose of seeing how useful this site is. Feel free to block it.</div>
                <div>Full source is available <a href="https://github.com/itsmikechu/memorable-password" target="repo">here</a> for inspection.</div>
            </div>
        )
    }
}

export default Footer;