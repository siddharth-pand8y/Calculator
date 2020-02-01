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
var total,
  operand = [],
  operation = [],
  numberInput = '',
  output = 0;
previousInputisOperator = false;

var calculationInput = '',
  calculationOutput = '';

function handleCalculatorButtonPress(isOperand, value) {
  this.calculationInput = document.getElementById('screenDisplayInput').value;
  if (isOperand === true) {
    this.previousInputisOperator = false;
    this.calculationInput += value;
    console.log('Operand', this.calculationInput);
    document.getElementById('screenDisplayInput').value = this.calculationInput;
  } else {
    if(this.calculationInput.length === 0) {
      console.warn('Operator entered before operand');
    } else {
      if(this.previousInputisOperator === true) {
        this.calculationInput = this.calculationInput.slice(0, -1) + value;
        console.log('Opertor #1',this.calculationInput);
      } else {
        this.calculationInput += value;
        console.log('Opertor #2',this.calculationInput);
      }
      this.previousInputisOperator = true;
      document.getElementById('screenDisplayInput').value = this.calculationInput;
    }
  }
}

function reset() {
  document.getElementById('screenDisplayInput').value = '';
  this.numberInput = '';
  this.operation.length = 0;
  this.operand.length = 0;
  this.output = 0;
}

function Delete() {
  document.getElementById('screenDisplayInput').value = document
    .getElementById('screenDisplayInput')
    .value.substring(
      0,
      document.getElementById('screenDisplayInput').value.length - 1
    );
}

function calculate() {
  this.operand.push(parseInt(this.numberInput));
  this.numberInput = '';

  if (this.operation.length + 1 === this.operand.length) {
    this.output = 0;
    for (let i = this.operand.length; i >= 0; i--) {
      switch (this.operation[i]) {
        case '+':
          this.output += this.operand[i + 1] + this.operand[i];
          break;
        case '-':
          this.output = this.operand[i + 1] - this.operand[i];
          break;
        case '*':
          this.output = this.operand[i + 1] * this.operand[i];
          break;
        case '/':
          this.output = this.operand[i + 1] / this.operand[i];
          break;
        default:
          break;
      }
    }
    console.log('Output', this.output);
    document.getElementById('output').innerHTML = this.output;
  }
}
