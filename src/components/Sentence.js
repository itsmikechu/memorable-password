import React, { Component } from 'react';
import './Sentence.css'

class Sentence extends Component {
    clearSentence = () => {
        this.sentence.value = '';
    }

    componentDidMount() {
        this.sentence.focus();
    }

    render() {
        return (
            <div className="Sentence">
                <textarea
                    ref={(input) => this.sentence = input} rows="2"
                    defaultValue={this.props.initialSentence}
                    onChange={this.props.computePassword}>
                </textarea>
                <i className="fa fa-times clear" onClick={this.clearSentence} title="Clear Passphrase"></i>
            </div>
        )
    }
}

export default Sentence;