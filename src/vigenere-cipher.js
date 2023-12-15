const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  checkArgs(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
  }

  processString(str, key, encrypt) {
    const message = str.toUpperCase();
    const keyword = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];

      if (this.alphabet.indexOf(char) === -1) {
        result += char;
        continue;
      }

      const keyChar = keyword[j % keyword.length];
      const keyIndex = this.alphabet.indexOf(keyChar);

      let newIndex;
      if (encrypt) {
        newIndex = (this.alphabet.indexOf(char) + keyIndex) % this.alphabet.length;
      } else {
        newIndex = (this.alphabet.indexOf(char) - keyIndex + this.alphabet.length) % this.alphabet.length;
      }

      result += this.alphabet[newIndex];
      j++;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    this.checkArgs(message, key);
    return this.processString(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    this.checkArgs(encryptedMessage, key);
    return this.processString(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
