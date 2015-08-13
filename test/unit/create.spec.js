import {Create} from '../../src/create';

describe('the Create module', () => {
  let sut;

  let examplePassphrases = [
    "My #1 favorite superhero is Green Lantern Hal Jordan.",
    "Between 8-9 pm each night, I'll eat 1 chocolate chunk cookie.",
    "How much wood would a woodchuck chuck if a woodchuck would chuck wood?",
    "I don't wanna grow up. I'm a Toys R Us kid. There's a million toys at Toys R Us that I can play with."
  ];

  let expectedPasswords = [
    "M#1fsiGLHJ.",
    "B8-9pen,I'e1ccc.",
    "Hmwwawciawwcw?",
    "Id'wgu.I'aTRUk.T'amtaTRUtIcpw."
  ];

  beforeEach(() => {
    sut = new Create();
  });

  it('contains subheading property', () => {
    expect(sut.subheading).toBeDefined();
  });

  it('subheading property is set correctly', () => {
    expect(sut.subheading).toEqual('Create a stronger, memorable password.');
  });

  it('contains a passphrase property', () => {
    expect(sut.passphrase).toBeDefined();
  });

  it('has an initially defined passphrase', () => {
    expect(sut.passphrase).toEqual('Clear this text, then type 1-2 memorable sentences with proper grammar and punctuation.');
  });

  it('has a function to convert a passphrase to password', () => {
    expect(sut.convertPassphraseToPassword).toBeDefined();
  });

  it('produces a shorter password than passphrase (estimates success)', () => {
    let passphraseLength = sut.passphrase.length;
    let passwordLength = sut.convertPassphraseToPassword.length;
    expect(passphraseLength).toBeGreaterThan(passwordLength);
  });

  it('produces correct passwords from passphrases', () => {
    let resultantPasswords = examplePassphrases.map(sut.convertPassphraseToPassword);
    expect(resultantPasswords).toEqual(expectedPasswords);
  });

  it('produces an expected password when calling the password getter', () => {
    sut.passphrase = examplePassphrases[0];
    let resultantPassword = sut.password;
    expect(resultantPassword).toEqual(expectedPasswords[0]);
  });

  it('has a function called clearPassphrase', () => {
    expect(sut.clearPassphrase).toBeDefined();
  });

  it('clearPassphrase function will set the passphrase property to empty string', () => {
    sut.clearPassphrase();
    expect(sut.passphrase.length).toEqual(0);
  });

});
