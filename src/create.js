export class Create {
  constructor() {
    this.subheading = 'Create a stronger, memorable password.';
    this.passphrase = 'Clear this text, then type 1-2 memorable sentences with proper grammar and punctuation.';
  }

  get password() {
    return this.convertPassphraseToPassword(this.passphrase);
  }

  clearButtonClick() {
    this.clearPassphrase();
    window.passphrase.focus();
  }

  clearPassphrase() {
    this.passphrase = '';
  }

  copyPasswordToClipboard() {
    // focus the field
    window.password.focus();

    // get the range
    var range = document.createRange();
    range.selectNodeContents(window.password);

    // get the selection
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    // try to copy the selection
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }

    if (msg !== 'successful') {
      alert('Unable to copy to clipboard.');
    }

    // remove focus and selection
    sel.removeAllRanges();
    window.password.blur();
  }

  copyButtonClick() {
    this.copyPasswordToClipboard();
  }

  convertPassphraseToPassword(phrase) {
    let passwordCharacters = [];

    // split each word
    let wordArray = phrase.split(' ');

    let nonAlphaRegex = /[^A-Za-z]/i;
    for (let word of wordArray) {

      // see if there are non-alpha chars in the current word
      let nonAlphaMatches = word.match(nonAlphaRegex);
      // if there are non-alpha characters within this word
      if (nonAlphaMatches) {
        // split the word up into characters
        let wordCharacters = word.split('');
        // push the first char regardless of type
        passwordCharacters.push(wordCharacters[0]);
        // shift all the elements to the left to remove the first char
        wordCharacters.shift();
        // extract the remaining non-alpha chars from the array
        for (let blah of wordCharacters) {
          if (nonAlphaRegex.test(blah)) {
            passwordCharacters.push(blah);
          }
        }
      } else {
        passwordCharacters.push(word.charAt(0));
      }
    }

    // "The password is...."
    let password = passwordCharacters.join('');
    return password;
  }
}
