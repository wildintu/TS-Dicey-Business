let generateBtn = document.getElementById('start-btn');
let someBtn = document.getElementById('some-btn');
let rollBtn = document.getElementById('roll-btn');
let array:any[] = [];
let counter = 0;

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.value = document.createTextNode(counter);
        this.render();
        array.push(this);
        this.roll();
        this.addEventsYo();
        this.rollAll();
    }

    addEventsYo(){
        this.div.addEventListener('click', () => {
            this.roll();
            this.div.style.backgroundColor = this.randomColor();
        });
        this.div.addEventListener('dblclick', () => this.destroyDie());
    }

    roll() {
        //determines value of the dice
        let randomVal = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = randomVal;
        this.divText = randomVal;
    }

    rollAll() {
    rollBtn.addEventListener('click', () => this.roll());
    }

    render() {
        this.div.className = 'die'
        this.div.id = counter;
        container.appendChild(this.div);
    }

    randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    destroyDie() {
        let e = this.div.parentNode;
        e.removeChild(this.div);
        let dieclass = array.indexOf(this);
        array.splice(dieclass, 1);
      }
      
    }
    
    generateBtn.addEventListener('click', function () {
        new Die();
        counter++;
    })
    
    someBtn.addEventListener('click', function() {
        let integers:any [] = [];
        array.forEach(function(e) {
            integers.push(e.divText);   
        })
        let final = integers.reduce(sumDice);
        alert(`Your sum is ${final}!`);
    })
    
    function sumDice(a: number,b: number) {
        return a + b;
      }