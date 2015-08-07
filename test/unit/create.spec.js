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

  it('has an initially defined passphrase', () => {
    expect(sut.passphrase).toEqual('Start out with 1-2 sentences. Make them proper, personal, and memorable!');
  });

  it('has a function to convert a passphrase to password', () => {
    expect(sut.password).toBeDefined();
  });

  it('produces a shorter password than passphrase', () => {
    var passphraseLength = sut.passphrase.length;
    var passwordLength = sut.password.length;
    expect(passphraseLength).toBeGreaterThan(passwordLength);
  });

});
