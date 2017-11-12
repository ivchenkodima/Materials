"use strict";

var getPurchasePermission = function () {

    var age = Number(document.getElementById('age').value);
    if(isNaN(age) || age <= 0 || age > 110){
        document.getElementById('err_v').innerHTML = 'No correct value for age were entered. 0 - 110 required';
        return;
    }else {
        if(document.getElementById('err_v').textContent.length > 0){
            console.log(document.getElementById('err_v').value);
            document.getElementById('err_v').innerHTML = '';
        }
    }

    document.getElementById('result').removeAttribute('hidden');
    document.getElementById('result').setAttribute('class', 'col-md-3 center alert alert-success');
    document.getElementById('result').innerHTML = calculate(age);
}

var calculate = function (age) {
    if (age > 0 && age < 6) {
        return 'Baby where is you parent?';
    }else if(age >= 6 && age <= 12){
        return 'Only soda\'s kid!';
    }else if(age > 12 && age < 18){
        return 'Could you please wait few years?';
    }else {
        return 'You are free to buy what everything you want';
    }
}

var clearInput = function () {
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
}

module.exports = calculate;


