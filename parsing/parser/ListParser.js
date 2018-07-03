const Parser = require('./Parser');
const Consts = require('./Consts');

class ListParser extends Parser {
  constructor(input) {
    super(input);
  }

  list() {
    this.match(Consts.LBRACK);
    this.elements();
    this.match(Consts.RBRACK);
  }

  elements() {
    this.element();
    while (this.lookahead.type == Consts.COMMA) {
      this.match(Consts.COMMA);
      this.element();
    }
  }

  element() {
    if (this.lookahead.type == Consts.NAME) {
      this.match(Consts.NAME);
    } else if (this.lookahead.type === Consts.LBRACK) {
      this.list();
    } else {
      throw new Error('expecting name or list; found' + this.lookahead);
    }
  }
}

module.exports = ListParser;