import React, { Component } from 'react';
import Header from './Header';
import Sentence from './Sentence';
import Password from './Password';
import Footer from './Footer';
import './App.css';

class App extends Component {
  computePassword = () => {
    let passwordCharacters = [];

    // split each word
    let wordArray = phrase.split(' ');

    let nonAlphaRegex = /[^A-Za-z]/i;
    for (let word of wordArray) {

      // see if there are non-alpha chars in the current word
      const nonAlphaMatches = word.match(nonAlphaRegex);
      // if there are non-alpha characters within this word
      if (nonAlphaMatches) {
        // split the word up into characters
        const wordCharacters = word.split('');
        // push the first char regardless of type
        passwordCharacters.push(wordCharacters[0]);
        // shift all the elements to the left to remove the first char
        wordCharacters.shift();
        // extract the remaining non-alpha chars from the array
        for (let blah of wordCharacters) {
          if (nonAlphaRegex.test(blah)) {
            passwordCharacters.push(blah);
          }
        }
      } else {
        passwordCharacters.push(word.charAt(0));
      }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sentence 
          initialSentence="Clear this text, then type 1-2 memorable sentences with proper grammar and punctuation."
          computePassword={this.computePassword} />
        <Password />
        <Footer />
      </div>
    );
  }
}

export default App;
