import * as $ from 'jquery';
// let generateBtn = document.getElementById('start-btn');
// let someBtn = document.getElementById('some-btn');
// let rollBtn = document.getElementById('roll-btn');
let array:any[] = [];
let counter = 0;


class Die {
    public div: JQuery;
    constructor() {
        this.div = $("<div></div>");
        $(this.div).text(counter);
        this.render();
        array.push(this.div);
        this.roll();
        this.addEventsYo();
        this.rollAll();
    }

    addEventsYo(){
        $(this.div).on('click', () => {
            this.roll();
            $(this.div).css('background-color', this.randomColor());
        });
        $(this.div).on('dblclick', () => this.destroyDie());
    }

    roll() {
        //determines value of the dice
        let randomVal = Math.floor(Math.random() * 6) + 1;
        $(this.div).text(randomVal);
        // this.divText = randomVal;
    }

    rollAll() {
    $('#roll-btn').on('click', () => this.roll());
    }

    render() {
        $(this.div).addClass('die');
        $(this.div).attr('id',counter);
        $('#container').append(this.div);
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    destroyDie() {
        // let e = $(this.div).parent();
        // console.log(e);
        $(this.div).remove();
        let dieclass = array.indexOf(this.div);
        array.splice(dieclass, 1);
      }
      
    }
    
    $('#start-btn').on('click', function () {
        new Die();
        counter++;
    })
    
    $('#some-btn').on('click', function() {
        let integers:any [] = [];
        array.forEach(function(e) {
            integers.push(parseInt($(e).text(),10));   
        })
        // console.log(integers)
        let final = integers.reduce(sumDice);
        alert(`Your sum is ${final}!`);
    })
    
    function sumDice(a: number,b: number) {
        return a + b;
      }