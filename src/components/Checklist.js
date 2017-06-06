import React, { Component } from 'react';
import './Checklist.css'

class Checklist extends Component {
    runRegexToGetLength = (value, regex) => {
        if (value === null || value.match(regex) === null) {
            return 0;
        }
        return value.match(regex).length;
    }

    countLowercase = (value) => {
        return this.runRegexToGetLength(value, /[a-z]/g);
    }

    countUppercase = (value) => {
        return this.runRegexToGetLength(value, /[A-Z]/g);
    }

    countNumbers = (value) => {
        return this.runRegexToGetLength(value, /[0-9]/g);
    }

    countSpecialCharacters = (value) => {
        return this.runRegexToGetLength(value, /\W/g);
    }

    satisfiesMinimumLength = (value, minimumLength) => {
        return (value === null ? false : value.length >= minimumLength);
    }
    
    render() {
        return (
            <ul className="Checklist">
                <li>Test</li>
            </ul>
        )
    }
}

export default Checklist;