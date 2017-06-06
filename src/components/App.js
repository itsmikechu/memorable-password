import React, { Component } from 'react';
import Header from './Header';
import Passphrase from './Passphrase';
import Password from './Password';
import Checklist from './Checklist';
import Footer from './Footer';
import './App.css';

class App extends Component {

  state = {
    passphrase: "Clear this text, then type 1-2 memorable sentences with proper grammar and punctuation.",
    password: "Ctt,tt1-2mswpgap.",
  }

  computePassword = (passphrase) => {
    if (passphrase.length) {
     return passphrase
        .match(/^.|([\s-."',?])+.|\W$/ig)
        .reduce((accumulator, currentValue, currentIndex, array) => {
          return accumulator + currentValue.replace(' ','');
        });
    }
    return '';
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
        <Password password={this.state.password} />
        <Checklist/>
        <Footer />
      </div>
    );
  }
}

export default App;
