import React from 'react';
import ReactDOM from 'react-dom';
import Checklist from './Checklist';

const cl = new Checklist();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checklist />, div);
});

it('finds lowercase characters', () => {
  const positiveCase = 'Fe53TvF*#0)f';
  const negativeCase = 'SDF#MC0329!EL';

  expect(cl.countLowercase(positiveCase)).toBeGreaterThan(0);
  expect(cl.countLowercase(negativeCase)).toBe(0);
});

it('finds UPPERCASE characters', () => {
  const positiveCase = 'QsLR$0(vVe48sLV';
  const negativeCase = 'fkd@e40nml1ee';

  expect(cl.countUppercase(positiveCase)).toBeGreaterThan(0);
  expect(cl.countUppercase(negativeCase)).toBe(0);
});

it('finds numb3r5 in the password', () => {
  const positiveCase = 'f#58FSmvRk)3OcVzZ';
  const negativeCase = 'dlkWEVzQAsEp[MF';

  expect(cl.countNumbers(positiveCase)).toBeGreaterThan(0);
  expect(cl.countNumbers(negativeCase)).toBe(0);
});

it('finds specia! ch@racters', () => {
  const positiveCase = 'D4bN43V(c@fe^fH';
  const negativeCase = 'dlfk3CS89SDFk30';

  expect(cl.countSpecialCharacters(positiveCase)).toBeGreaterThan(0);
  expect(cl.countSpecialCharacters(negativeCase)).toBe(0);
});


it('handles empty passwords ok', () => {
  expect(cl.countLowercase('')).toBe(0);
  expect(cl.countUppercase('')).toBe(0);
  expect(cl.countNumbers('')).toBe(0);
  expect(cl.countSpecialCharacters('')).toBe(0);
});

it('determines that computed password length >= 8', () => {
  const minimumPasswordLength = 8;
  const positiveCase = 'Fe#6j)vdL84@';
  const negativeCase = 'pR$c#9J';

  expect(cl.satisfiesMinimumLength(positiveCase, minimumPasswordLength)).toBe(true);
  expect(cl.satisfiesMinimumLength(negativeCase,minimumPasswordLength)).toBe(false);
});