"use strict";
exports.__esModule = true;
var $ = require("jquery");
// let generateBtn = document.getElementById('start-btn');
// let someBtn = document.getElementById('some-btn');
// let rollBtn = document.getElementById('roll-btn');
var array = [];
var counter = 0;
var Die = /** @class */ (function () {
    function Die() {
        this.div = $("<div></div>");
        $(this.div).text(counter);
        this.render();
        array.push(this.div);
        this.roll();
        this.addEventsYo();
        this.rollAll();
    }
    Die.prototype.addEventsYo = function () {
        var _this = this;
        $(this.div).on('click', function () {
            _this.roll();
            $(_this.div).css('background-color', _this.randomColor());
        });
        $(this.div).on('dblclick', function () { return _this.destroyDie(); });
    };
    Die.prototype.roll = function () {
        //determines value of the dice
        var randomVal = Math.floor(Math.random() * 6) + 1;
        $(this.div).text(randomVal);
        // this.divText = randomVal;
    };
    Die.prototype.rollAll = function () {
        var _this = this;
        $('#roll-btn').on('click', function () { return _this.roll(); });
    };
    Die.prototype.render = function () {
        $(this.div).addClass('die');
        $(this.div).attr('id', counter);
        $('#container').append(this.div);
    };
    Die.prototype.randomColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    };
    Die.prototype.destroyDie = function () {
        // let e = $(this.div).parent();
        // console.log(e);
        $(this.div).remove();
        var dieclass = array.indexOf(this.div);
        array.splice(dieclass, 1);
    };
    return Die;
}());
$('#start-btn').on('click', function () {
    new Die();
    counter++;
});
$('#some-btn').on('click', function () {
    var integers = [];
    array.forEach(function (e) {
        integers.push(parseInt($(e).text(), 10));
    });
    // console.log(integers)
    var final = integers.reduce(sumDice);
    alert("Your sum is " + final + "!");
});
function sumDice(a, b) {
    return a + b;
}
