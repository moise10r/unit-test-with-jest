module.exports.stringLength = (string) => {
  if(string.length !== 0 || string.length >=10 ) return  string.length;
  return new Error('The string must have at least 1 character or less than 10 characters.');
}

module.exports.reverseString = (string) => {
   return  string.split('').reverse().join('');
}

class Calculator {
  constructor(number1, number2){
    this.number1 = number1;
    this.number2 = number2;
  }

  add() {
    return this.number2 + this.number1
  }
  
  substract() {
    return this.number2 - this.number1
  }

  multiply() {
    return this.number2 * this.number1
  }

  divide() {
    return this.number2 / this.number1
  }
}

module.exports.capitalizeString = (string) => {
  const capitalizeStr = string[0].toUpperCase();
  return string.replace(string[0], capitalizeStr);
}


module.exports.Calculator = Calculator;
