"use strict";

var calculate = require('./calcAcceleration');

var chai = require('chai');
var expect = chai.expect;

describe('Acceleration formula test set:', function () {
    var positive = new Map();

    before(function () {
        positive.set({speed:10, time: 20}, 2160);
        positive.set({speed:10, time:5}, 172.5);
        positive.set({speed:100,time:200}, 216000);
    });

    it('should calculate expression according to expected data', function () {
        for(var [key, value] of positive.entries()){
            expect(calculate(key.speed, key.time)).to.be.a('number');
            expect(calculate(key.speed, key.time)).to.not.be.a('string');
            expect(calculate(key.speed, key.time)).to.equal(value);
        }
    });

    it('should be robust to negative value, throw an error');
});