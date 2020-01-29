function tabSelect(calculatorSelected) {
    if(calculatorSelected === true ) {
        document.getElementById("calculatorButton").className="selectedAction";
        document.getElementById("converterButton").removeAttribute("class");
        document.getElementById("selectedTab").style.transform="translate(0, 0)"

    } else {
        document.getElementById("converterButton").className="selectedAction";
        document.getElementById("calculatorButton").removeAttribute("class");
        document.getElementById("selectedTab").style.transform="translate(100%, 0)"
    }
}
var total,operand=[], operation=[];
function screenDisplayOptions(operand, value) {
    if(operand === false) {
        this.operation.push(value);
        console.log('Operator', this.operation);
    } else {
        this.operand.push(value);
        console.log('Operator', this.operand);
    }
}