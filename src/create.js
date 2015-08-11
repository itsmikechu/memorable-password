export class Create {
  heading = 'Create a stronger, memorable password.';
  passphrase = 'Clear this text, then type 1-2 memorable sentences with proper grammar and punctuation.';

  // TODO: algo needs to be split out into say a proxy class or at least hide the algo
  get password() {
    let passwordCharacters = [];

    // split each word
    let wordArray = this.passphrase.split(' ');

    let nonAlphaRegex = /[^A-Za-z]/i;

    for (let word of wordArray) {
      console.log(word);

      let nonAlphaMatches = word.match(nonAlphaRegex);
      if (nonAlphaMatches) {
        passwordCharacters.push(nonAlphaMatches);
        passwordCharacters.push(word.charAt(0));
      } else {
        passwordCharacters.push(word.charAt(0));
      }
    }

    // "The password is...."
    let password = passwordCharacters.join('');
    console.log('Password: ' + password);
    return password;
  }
}
