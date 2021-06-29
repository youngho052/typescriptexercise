interface Number {
  decimal: number;
  hex: number;
  binary: number;
  octal: number;
}

function number(number: Number) {
  return "number =" + number.decimal + " " + number.hex;
}

let num = { decimal: 6, hex: 0xf00d, binary: 0b1010, octal: 0o744 };

number(num);

export default number;
