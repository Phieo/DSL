const Lexer = require('./Lexer');
const Token = require('./Token');
const Consts = require('./Consts')

class ListLexer extends Lexer {
  constructor(input) {
    super(input);
    this.c = this.input.charAt(this.p);
  }

  nextToken() {
    while (this.p <= this.input.length - 1 ) {
      switch (this.c) {
        case '':
        case ' ':
        case '\n':
        case '\t':
        case '\r':
          this.consume();
          continue;
        case '[':
          this.consume();
          return new Token(Consts.LBRACK, '[');
        case ']':
          this.consume();
          return new Token(Consts.RBRACK, ']');
        case ',':
          this.consume();
          return new Token(Consts.COMMA, ',');
        default:
          if (this.isLETTER()) {
            return new Token(Consts.NAME, this.NAME());
          } else {
            throw new Error(`invalid character: ${this.c}`);
          }
      }
    }
    return new Token(Consts.EOF, '<EOF>');
  }

  isLETTER() {
    return /[a-zA-Z]/.test(this.c);
  }

  NAME() {
    let str = '';
    do { str += this.c; this.consume(); } while (this.isLETTER());
    return str;
  }
}

module.exports = ListLexer;
