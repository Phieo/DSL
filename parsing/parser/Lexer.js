class Lexer {
  constructor(input) {
    this.input = input;
    this.p = 0; // current index of character
    this.c = ''; // current character
  }

  consume() {
    this.c = this.input.charAt(++this.p);
  }
}

module.exports = Lexer;
