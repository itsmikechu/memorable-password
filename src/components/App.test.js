import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('has correct initial passphrase', () => {
  expect(new App().state.passphrase).toEqual('Clear this text, then type 1-2 memorable sentences with proper grammar and punctuation.');
});

it('has correct initial password', () => {
  expect(new App().state.password).toEqual('Ctt,tt1-2mswpgap.');
});

it('computes the correct password from passphrase', () => { 
  const app = new App();
  expect(app.computePassword(app.state.passphrase)).toEqual(app.state.password);
});