function tabSelect(calculatorSelected) {
  if (calculatorSelected === true) {
    document.getElementById('calculatorButton').className = 'selectedAction';
    document.getElementById('converterButton').removeAttribute('class');
    document.getElementById('selectedTab').style.transform = 'translate(0, 0)';
  } else {
    document.getElementById('converterButton').className = 'selectedAction';
    document.getElementById('calculatorButton').removeAttribute('class');
    document.getElementById('selectedTab').style.transform =
      'translate(100%, 0)';
  }
}
var output = 0;
previousInputisOperator = false;
var calculationInput = '';
var openBracket = 0;

function handleNumpadPress(value) {
  this.calculationInput = document.getElementById('screenDisplayInput').value;
  this.previousInputisOperator = false;
  this.calculationInput += value;
  console.log('Operand', this.calculationInput);
  document.getElementById('screenDisplayInput').value = this.calculationInput;
}

function handleOperatorPress(value) {
  if (this.calculationInput.length === 0) {
    console.warn('Operator entered before operand');
  } else {
    if (this.previousInputisOperator === true) {
      switch (value) {
        case '/':
        case '*':
        case '+':
        case '-':
        case '%':
          this.calculationInput = this.calculationInput.slice(0, -1) + value;
          break;
        default:
          console.warn('Switch Default', value);
          break;
      }
      console.log('Operator #1', this.calculationInput);
    } else {
      this.calculationInput += value;
      console.log('Operator #2', value);
    }
    this.previousInputisOperator = true;
  }
  document.getElementById('screenDisplayInput').value = this.calculationInput;
}

function brackets() {
  if (this.openBracket < 1) {
    this.calculationInput += '(';
    this.openBracket++;
  } else {
    this.calculationInput += ')';
    this.openBracket--;
  }
  document.getElementById('screenDisplayInput').value = this.calculationInput;
}

function makeValueNegative() {
  this.calculationInput += '(-';
  this.openBracket++;
  document.getElementById('screenDisplayInput').value = this.calculationInput;
}

function reset() {
  document.getElementById('screenDisplayInput').value = '';
  document.getElementById('output').innerHTML = '0';
  this.output = 0;
}

function Delete() {
  this.calculationInput = this.calculationInput.substring(
    0,
    this.calculationInput.length - 1
  );
  document.getElementById('screenDisplayInput').value = this.calculationInput;

}

function calculate() {
  this.output = eval(document.getElementById('screenDisplayInput').value);
  console.log('Output', this.output);
  document.getElementById('output').innerHTML = this.output;
}
