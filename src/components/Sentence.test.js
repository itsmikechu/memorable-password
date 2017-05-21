import React from 'react';
import ReactDOM from 'react-dom';
import Sentence from './Sentence';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sentence />, div);
});
