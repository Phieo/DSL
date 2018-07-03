const Token = require('./Token');
const ListLexer = require('./ListLexer');
const Consts = require('./Consts');
const ListParser = require('./ListParser')

const args = process.argv.slice(2);

const lexer = new ListLexer(args[0]);
const parser = new ListParser(lexer);

parser.list();