"use strict";

var executeOnclick = function () {

    var v = Number(document.getElementById('speed').value);
    if(isNaN(v) || v <= 0){
        document.getElementById('err_v').innerHTML = 'No value of speed has been entered or this is not a number!';
        return;
    }else {
        if(document.getElementById('err_v').textContent.length > 0){
            console.log(document.getElementById('err_v').value);
            document.getElementById('err_v').innerHTML = '';
        }
    }

    var t =  Number(document.getElementById('time').value);

    if(isNaN(t) || t <= 0){
        document.getElementById('err_t').innerHTML = '<p>No value of time has been entered or this is not a number!</p>';
        return;
    }else {
        if(document.getElementById('err_t').textContent.length > 0){
            console.log(document.getElementById('err_t').value);
            document.getElementById('err_t').innerHTML = '';
        }
    }

    document.getElementById('result').removeAttribute('hidden');
    document.getElementById('result').setAttribute('class', 'col-md-3 center alert alert-success');
    document.getElementById('result').innerHTML = 'The result is: ' + calculate(v, t);
};

var calculate = function (v, t) {
    var g = 9.8;

    return v*t + (g *  Math.pow(t, 2))/2;
};

var clearInput = function () {
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }
};

module.exports = calculate;


