"use strict";

var getResult = function () {

    var val1 = Number(prompt('Enter value 1: ', '0'));
    var val2 = Number(prompt('Enter value 2: ', '0'));
    var operator = prompt('Enter required operation: ');

    if(isNaN(val1) || isNaN(val2)){
        document.getElementById('err_v').innerHTML = 'First or second value was not a number! Please set correct data.';
        if(document.getElementById('wrong_action').textContent.length > 0 || document.getElementById('result').textContent.length > 0){
            removeElement('wrong_action');
            removeElement('result');
        }
        return;
    }else {
        if(document.getElementById('err_v').textContent.length > 0){
            removeElement('err_v');
        }
    }

    var result = calculate(val1, val2, operator);

    writeIntoDOM(result)
}

var calculate = function (val1, val2, operator) {
    switch(operator) {
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
        case '/':
            return val1 / val2;
        case '%':
            return val1 % val2;
        default:
            return 'Incorrect operator was entered!';
    }
}

var writeIntoDOM = function (result) {
    if(isNaN(result)){
        if(document.getElementById('result').textContent.length > 0){
            removeElement('result');
        }
        document.getElementById('wrong_action').removeAttribute('hidden');
    }else {
        if(document.getElementById('wrong_action').textContent.length > 0){
            removeElement('wrong_action');
        }
        document.getElementById('result').removeAttribute('hidden');
        document.getElementById('result').setAttribute('class', 'col-md-5 left alert alert-success');
        document.getElementById('result').innerHTML = 'The result is: ' + result;
    }
}

var removeElement = function (element_id) {
    document.getElementById(element_id).setAttribute('hidden', 'hidden');
}



