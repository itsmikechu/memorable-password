import {configure} from '../../src/main';

describe('the Main module', () => {
  it('contains an exported configure function', () => {
    expect(configure).toBeDefined();
  });
});
