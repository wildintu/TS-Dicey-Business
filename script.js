"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
// let generateBtn = document.getElementById('start-btn');
// let someBtn = document.getElementById('some-btn');
// let rollBtn = document.getElementById('roll-btn');
var array = [];
var counter = 0;
var Die = /** @class */ (function () {
    function Die() {
        this.div = jquery_1.default("<div></div>");
        jquery_1.default(this.div).text(counter);
        this.render();
        array.push(this);
        this.roll();
        this.addEventsYo();
        this.rollAll();
    }
    Die.prototype.addEventsYo = function () {
        var _this = this;
        jquery_1.default(this.div).on('click', function () {
            _this.roll();
            jquery_1.default(_this.div).css('background-color', _this.randomColor());
        });
        jquery_1.default(this.div).on('dblclick', function () { return _this.destroyDie(); });
    };
    Die.prototype.roll = function () {
        //determines value of the dice
        var randomVal = Math.floor(Math.random() * 6) + 1;
        jquery_1.default(this.div).text(randomVal);
        // this.divText = randomVal;
    };
    Die.prototype.rollAll = function () {
        var _this = this;
        jquery_1.default('#roll-btn').on('click', function () { return _this.roll(); });
    };
    Die.prototype.render = function () {
        jquery_1.default(this.div).addClass('die');
        jquery_1.default(this.div).attr('id', counter);
        jquery_1.default('#container').append(this.div);
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
        jquery_1.default(this.div).remove();
        var dieclass = array.indexOf(this);
        array.splice(dieclass, 1);
    };
    return Die;
}());
jquery_1.default('#start-btn').on('click', function () {
    new Die();
    counter++;
});
jquery_1.default('#some-btn').on('click', function () {
    var integers = [];
    array.forEach(function (e) {
        integers.push(e.divText);
    });
    var final = integers.reduce(sumDice);
    alert("Your sum is " + final + "!");
});
function sumDice(a, b) {
    return a + b;
}
