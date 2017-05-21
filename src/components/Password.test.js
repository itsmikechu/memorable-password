import React from 'react';
import ReactDOM from 'react-dom';
import Password from './Password';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Password />, div);
});
