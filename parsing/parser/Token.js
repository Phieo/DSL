class Token {
  constructor(type, text) {
    this.type = type;
    this.text = text;
  }

  print() {
    console.log(`<'${this.text}',${this.type}>`);
  }

  toString() {
    return `<'${this.text}',${this.type}>`;
  }
}

module.exports = Token;
