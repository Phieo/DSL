const ListLexer = require('./ListLexer');
const Token = require('./Token');

class Parser {
  constructor(input) {
    this.input = input;
    this.lookahead = this.input.nextToken();
  }

  match(x) {
    if (this.lookahead.type === x) { 
      this.consume();
    } else {
      throw new Error('expecting ' + this.input.getTokenName(x) + '; found' + this.lookahead.toString());
    }
  }

  consume() {
    this.lookahead = this.input.nextToken();
  }
}

module.exports = Parser;