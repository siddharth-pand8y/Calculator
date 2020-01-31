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
previousInputOperator = false;

function screenDisplayOptions(operand, value) {
  document.getElementById('screenDisplayInput').value += value;
  if (operand === false) {
    this.operation.push(value);
    console.log('Operator', this.operation);
    this.operand.push(parseInt(this.numberInput));
    this.numberInput = '';
    this.previousInputOperator = true;
  } else {
    if (this.previousInputOperator !== true) {
      this.numberInput += value;
    }
    this.previousInputOperator = false;
  }
}

function reset() {
  document.getElementById('screenDisplayInput').value = '';
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
  console.log(this.operation, this.operand);
  if (this.operation.length + 1 === this.operand.length) {
    this.output = 0;
    for (let i = this.operand.length; i >= 0; i++) {
      switch (this.operation[i]) {
        case '+':
          this.output += (this.operand[i + 1] + this.operand[i]);
          break;
        case '-':
          this.output = (this.operand[i + 1] - this.operand[i]);
          break;
        case '*':
          this.output = (this.operand[i + 1] * this.operand[i]);
          break;
        case '/':
          this.output = (this.operand[i + 1] / this.operand[i]);
          break;
        default:
          break;
      }
    }
    console.log('Output', this.output);
    document.getElementById('output').value = this.output;
  }
}
