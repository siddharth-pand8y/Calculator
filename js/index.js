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
  numberInput = '';
previousInputOperator = false;


function screenDisplayOptions(operand, value) {
  document.getElementById('screenDisplayInput').value += value;
  if (operand === false) {
    this.operation.push(value);
    console.log('Operator', this.operation);
    this.operation.push(parseInt(this.numberInput));
    this.numberInput = '';
    this.previousInputOperator = true;
  } else {
    if (this.previousInputOperator !== true) {
      console.log('Operand', this.operand);
    }
    this.previousInputOperator = true;
  }
}

function reset() {
    document.getElementById('screenDisplayInput').value = '';
}

function Delete() {
    console.log(document.getElementById('screenDisplayInput').value.length);
    let a = document.getElementById('screenDisplayInput').value;
    document.getElementById('screenDisplayInput').value= a.substring(0, a.length-1);
}
