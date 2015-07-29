import {Create} from '../../src/create';

describe('the Create module', () => {
  let sut;

  beforeEach(() => {
    sut = new Create();
  });

  it('contains heading property', () => {
    expect(sut.heading).toBeDefined();
  });

  it('\'s heading property is set correctly', () => {
    expect(sut.heading).toEqual('Create a stronger memorable password');
  });

  it('contains a passphrase property', () => {
    expect(sut.passphrase).toBeDefined();
  });

  it('an initially defined passphrase', () => {
    expect(sut.passphrase).toEqual('Start out with 1-2 sentences. Make them proper, personal, and memorable!');
  })
});
