import React, { Component } from 'react';
import Header from './Header';
import Passphrase from './Passphrase';
import Password from './Password';
import Footer from './Footer';
import './App.css';

class App extends Component {

  state = {
    passphrase: "Clear this text, then type 1-2 memorable sentences with proper grammar and punctuation.",
    password: "Ctt,tt1-2mswpgap.",
  }

  computePassword = (passphrase) => {
    const passwordCharacters = [];

    if (passphrase.length) {
      const nonAlphaRegex = /[^A-Za-z]/i;
      // split each word
      for (let word of passphrase.split(' ')) {
        // if there are non-alpha characters within this word
        if (word.match(nonAlphaRegex)) {
          // split the word up into characters
          const wordCharacters = word.split('');
          // push the first char regardless of type
          passwordCharacters.push(wordCharacters[0]);
          // shift all the elements to the left to remove the first char
          wordCharacters.shift();
          // extract the remaining non-alpha chars from the array
          for (let character of wordCharacters) {
            if (nonAlphaRegex.test(character)) {
              passwordCharacters.push(character);
            }
          }
        } else {
          passwordCharacters.push(word.charAt(0));
        }
      }
    }
    return passwordCharacters.join('');
  }

  updateComputedPassword = (passphrase) => {
    this.setState({
      password: this.computePassword(passphrase)
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Passphrase
          initialPassphrase={this.state.passphrase}
          updateComputedPassword={this.updateComputedPassword} />
        <Password initialPassword={this.state.password} />
        <Footer />
      </div>
    );
  }
}

export default App;
