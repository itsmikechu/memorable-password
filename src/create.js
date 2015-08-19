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
    // make contenteditable
    window.password.setAttribute('contenteditable', 'true');

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
    let copiedSuccessfully;
    try {
      copiedSuccessfully = document.execCommand('copy');
    } catch (err) {
      console.log('Oops, unable to copy');
    }

    // confirm to UI it's done
    let resultIconClass = 'fa-exclamation-triangle';
    if (copiedSuccessfully) {
      resultIconClass = 'fa-check';
    }
    window.copyButton.classList.remove('fa-copy');
    window.copyButton.classList.add(resultIconClass);
    window.setTimeout(function() {
      window.copyButton.classList.remove('fa-exclamation-triangle');
      window.copyButton.classList.remove('fa-check');
      window.copyButton.classList.add('fa-copy');
    }, 2000);

    // remove focus, selection, and contenteditable
    sel.removeAllRanges();
    window.password.blur();
    window.password.removeAttribute('contenteditable');
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
    let password = passwordCharacters.join('').trim();
    return password;
  }
}
