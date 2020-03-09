"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateBtn = document.getElementById('start-btn');
var someBtn = document.getElementById('some-btn');
var rollBtn = document.getElementById('roll-btn');
var array = [];
var counter = 0;
var Die = /** @class */ (function () {
    function Die() {
        this.div = document.createElement('div');
        this.value = document.createTextNode(counter);
        this.render();
        array.push(this);
        this.roll();
        this.addEventsYo();
        this.rollAll();
    }
    Die.prototype.addEventsYo = function () {
        var _this = this;
        this.div.addEventListener('click', function () {
            _this.roll();
            _this.div.style.backgroundColor = _this.randomColor();
        });
        this.div.addEventListener('dblclick', function () { return _this.destroyDie(); });
    };
    Die.prototype.roll = function () {
        //determines value of the dice
        var randomVal = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = randomVal;
        this.divText = randomVal;
    };
    Die.prototype.rollAll = function () {
        var _this = this;
        rollBtn.addEventListener('click', function () { return _this.roll(); });
    };
    Die.prototype.render = function () {
        this.div.className = 'die';
        this.div.id = counter;
        container.appendChild(this.div);
    };
    Die.prototype.randomColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    };
    Die.prototype.destroyDie = function () {
        var e = this.div.parentNode;
        e.removeChild(this.div);
        var dieclass = array.indexOf(this);
        array.splice(dieclass, 1);
    };
    return Die;
}());
generateBtn.addEventListener('click', function () {
    new Die();
    counter++;
});
someBtn.addEventListener('click', function () {
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
