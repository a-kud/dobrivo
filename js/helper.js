function profitCalculator() {
    var oForm = document.forms[0]; //oForm is the form object reference
    var oSelect = oForm.elements["grains"]; //reference to <select id="grains">
    var index = oSelect.selectedIndex;
    var selected_option_value = oSelect.options[index].value; //Find out how many options there are in a specific drop-down list and obtaine the value from selected element
    var grain_price = parseFloat(selected_option_value);
    var produce = parseFloat(oForm.elements["produce"].value) * 0.1; //convert to tonnes/hectare
    var fertilizer_price = parseFloat(oForm.elements["fertilizer_price"].value);
    var area = parseFloat(oForm.elements["area"].value);
    if (isNaN(produce)) {
        alert("Введи урожайность");
        return false;
    }
    if (isNaN(fertilizer_price)) {
        alert("Введи стоимость удобрения");
        return false;
    }
    if (isNaN(area)) {
        alert("Введи посевную площадь");
        return false;
    }
    
    document.getElementById("answer").innerHTML = parseInt((area * (grain_price * produce - fertilizer_price))); //show result in html form
    return false;
}