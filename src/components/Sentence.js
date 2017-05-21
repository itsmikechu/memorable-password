import React, { Component } from 'react';
import './Sentence.css'

class Sentence extends Component {
    clearSentence = () => {
        this.refs.sentenceInput.value = '';
    }

    componentDidMount() {
        this.refs.sentenceInput.focus();
    }

    render() {
        return (
            <div className="Sentence">
                <textarea defaultValue={this.props.initialSentence} ref="sentenceInput" rows="2"></textarea>
                <i className="fa fa-times clear" onClick={this.clearSentence} title="Clear Passphrase"></i>
            </div>
        )
    }
}

export default Sentence;