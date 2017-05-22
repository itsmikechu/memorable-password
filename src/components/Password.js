import React, { Component } from 'react';
import './Password.css'

class Password extends Component {
    copyPassword = () => {
        console.log(this.props.passwordResult);
    }

    render() {
        return (
            <div className="Password">
                <h3>{this.props.passwordResult}</h3>
                <i className="fa fa-copy" onClick={this.copyPassword} title="Copy Password"></i>
            </div>
        )
    }
}

export default Password;