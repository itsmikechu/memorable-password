import React, { Component } from 'react';
import './Sentence.css'

class Sentence extends Component {
    clearSentence = (event) => {
        this.sentence.value = '';
        this.props.computePassword(this.sentence);
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
                    onChange={(event) => this.props.computePassword(event.target.value)}>
                </textarea>
                <i className="fa fa-times clear" onClick={this.clearSentence} title="Clear Passphrase"></i>
            </div>
        )
    }
}

export default Sentence;