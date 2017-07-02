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

it('computes the correct initial password from initial passphrase', () => { 
  const app = new App();
  expect(app.computePassword(app.state.passphrase)).toEqual(app.state.password);
});

it('computes passwords off multi-word-hyphenated phrases', () => {
  expect(new App().computePassword('up-to-date')).toEqual('u-t-d');
});

it('computes passwords within quotations', ()=> {
  expect(new App().computePassword('He said, "Why can I not go to the concert?"')).toEqual('Hs,"WcIngttc?"');
});

it ('computes passwords with numbers >= 10', () => {
  expect(new App().computePassword("I will live to be 98 years old.")).toEqual("Iwltb98yo.")
});
