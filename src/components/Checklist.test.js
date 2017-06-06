import React from 'react';
import ReactDOM from 'react-dom';
import Checklist from './Checklist';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checklist />, div);
});

it('finds lowercase characters', () => {
  throw 'Not implemented' ;
});

it('finds UPPERCASE characters', () => {
  throw 'Not implemented';
});

it('finds numb3r5 in the password', () => {
  throw 'Not implemented';
});

it('finds specia! ch@racters', () => {
  throw 'Not implemented';
});

it('determines that computed password length >= 8', () => {
  throw 'Not implemented';
});
