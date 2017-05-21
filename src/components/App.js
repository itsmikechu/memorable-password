import React, { Component } from 'react';
import Header from './Header';
import Sentence from './Sentence';
import Password from './Password';
import Footer from './Footer';
import './App.css';

class App extends Component {
  computePassword = () => {
    console.log("Going to compute password");
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
