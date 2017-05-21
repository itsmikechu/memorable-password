import React, { Component } from 'react';
import './Password.css'

class Password extends Component {
    render() {
        return (
            <div className="Password">
                <h3>Ctt,tt1-2mswpgap.</h3>
                <i className="fa fa-copy" onClick={this.clearPassword} title="Copy Password"></i>
            </div>
        )
    }
}

export default Password;