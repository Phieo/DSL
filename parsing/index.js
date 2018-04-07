const Token = require('./Token');
const ListLexer = require('./ListLexer');
const Consts = require('./Consts');

const args = process.argv.slice(2);

const lexer = new ListLexer(args[0]);
let token = lexer.nextToken();

while (token.type !== Consts.EOF) {
  token.print();
  token = lexer.nextToken();
}

token.print();
