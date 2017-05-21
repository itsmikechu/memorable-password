import React, { Component } from 'react';
import './Sentence.css'

class Sentence extends Component {
    clearSentence = () => {
        console.log("About to clear the sentence.")
    }

    render() {
        return (
            <div className="Sentence">
                <input type="text" value={this.props.initialSentence} />
                <i class="fa fa-times au-target" onClick={this.clearSentence} title="Clear Passphrase"></i>
            </div>
        )
    }
}

export default Sentence;