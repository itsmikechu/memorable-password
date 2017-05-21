import React, { Component } from 'react';
import './Sentence.css'

class Sentence extends Component {
    clearSentence = () => {
        this.refs.sentenceInput.value = '';
    }

    render() {
        return (
            <div className="Sentence">
                <input type="text" defaultValue={this.props.initialSentence} ref="sentenceInput" />
                <i className="fa fa-times clear" onClick={this.clearSentence} title="Clear Passphrase"></i>
            </div>
        )
    }
}

export default Sentence;