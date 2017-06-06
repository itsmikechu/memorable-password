import React, { Component } from 'react';
import './Checklist.css'

class Checklist extends Component {
    minimumCharacterLengthPerCategory = 2;
    minimumTotalLength = 10; // https://www.owasp.org/index.php/Authentication_Cheat_Sheet#Password_Length

    runRegexToGetLength = (value, regex) => {
        if (typeof value === 'undefined' || value === null || value.match(regex) === null) {
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

    satisfiesUppercase = (value, minimumLength) => {
        return this.countUppercase(value) >= minimumLength;
    }

    satisfiesLowercase = (value, minimumLength) => {
        return this.countLowercase(value) >= minimumLength;
    }

    satisfiesNumbers = (value, minimumLength) => {
        return this.countNumbers(value) >= minimumLength;
    }

    satisfiesSpecialCharacters = (value, minimumLength) => {
        return this.countSpecialCharacters(value) >= minimumLength;
    }

    render() {
        return (
            <ul className="Checklist">
                <li className="category">
                    <i className={this.satisfiesUppercase(this.props.password, this.minimumCharacterLengthPerCategory) ? "fa fa-check" : "fa fa-times"}></i>
                    <span>{this.countUppercase(this.props.password)} Uppercase character(s)</span>
                </li>
                <li className="category">
                    <i className={this.satisfiesLowercase(this.props.password, this.minimumCharacterLengthPerCategory) ? "fa fa-check" : "fa fa-times"}></i>
                    <span>{this.countLowercase(this.props.password)} Lowercase character(s)</span>
                </li>
                <li className="category">
                    <i className={this.satisfiesNumbers(this.props.password, this.minimumCharacterLengthPerCategory) ? "fa fa-check" : "fa fa-times"}></i>
                    <span>{this.countNumbers(this.props.password)} Number(s) used</span>
                </li>
                <li className="category">
                    <i className={this.satisfiesSpecialCharacters(this.props.password, this.minimumCharacterLengthPerCategory) ? "fa fa-check" : "fa fa-times"}></i>
                    <span>{this.countSpecialCharacters(this.props.password)} Special character(s)</span>
                </li>
                <li className="category">
                    <i className={this.satisfiesMinimumLength(this.props.password, this.minimumTotalLength) ? "fa fa-check" : "fa fa-times"}></i>
                    <span>
                        {this.props.password.length} Total character(s)
                        [<a target="owasp" href="https://www.owasp.org/index.php/Authentication_Cheat_Sheet#Password_Length">OWASP guidance</a>]
                    </span>
                </li>
            </ul>
        )
    }
}

export default Checklist;