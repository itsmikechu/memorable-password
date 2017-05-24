import React, { Component } from 'react';
import './Password.css'

class Password extends Component {
    copyPassword = () => {
        // make contenteditable
        this.passwordResult.setAttribute('contenteditable', 'true');

        // focus the field
        this.passwordResult.focus();

        // get the range
        var range = document.createRange();
        range.selectNodeContents(this.passwordResult);

        // get the selection
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);

        // try to copy the selection
        let copiedSuccessfully;
        try {
            copiedSuccessfully = document.execCommand('copy');
        } catch (err) {
            console.log('Oops, unable to copy');
        }

        // confirm to UI it's done
        let resultIconClass = 'fa-exclamation-triangle';
        if (copiedSuccessfully) {
            resultIconClass = 'fa-check';
        }
        this.copyButton.classList.remove('fa-copy');
        this.copyButton.classList.add(resultIconClass);
        window.setTimeout(() => {
            this.copyButton.classList.remove('fa-exclamation-triangle');
            this.copyButton.classList.remove('fa-check');
            this.copyButton.classList.add('fa-copy');
        }, 2000);

        // remove focus, selection, and contenteditable
        sel.removeAllRanges();
        this.passwordResult.blur();
        this.passwordResult.removeAttribute('contenteditable');
    }

    render() {
        return (
            <div className="Password">
                <h3 ref={(h3) => { this.passwordResult = h3; }}>{this.props.initialPassword}</h3>
                <i ref={(i) => { this.copyButton = i; }} className="fa fa-copy copyButton" onClick={this.copyPassword} title="Copy Password" ></i>
            </div>
        )
    }
}

export default Password;