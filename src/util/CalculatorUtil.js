export const add = (a, b) => +a + +b;

export const substract = (a, b) => +a - +b;

export const multiply = (a, b) => +a * +b;

export const divide = (a, b) => +a / +b;

export const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw "error";
  }
};

export const isNumber = (str) => {
  return /[0-9]/.test(str);
}

export const isOperator = (str) => {
  return /[\+\-*\/]/.test(str);
}

export const isEqual = (str) => {
  return str === '=';
}

export const isInit = (str) => {
  return str === 'C';
}
