import React, { Component } from 'react';
import './Passphrase.css'

class Passphrase extends Component {
    clearPassphrase = (event) => {
        this.passphraseInput.value = '';
        this.props.computePassword(this.passphraseInput.value);
    }

    componentDidMount() {
        this.passphraseInput.focus();
    }

    render() {
        return (
            <div className="Passphrase">
                <textarea
                    ref={(input) => this.passphraseInput = input} rows="2"
                    defaultValue={this.props.initialPassphrase}
                    onChange={(event) => this.props.computePassword(event.target.value)}>
                </textarea>
                <i className="fa fa-times clear" onClick={this.clearPassphrase} title="Clear Passphrase"></i>
            </div>
        )
    }
}

export default Passphrase;