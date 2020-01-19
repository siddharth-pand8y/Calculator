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