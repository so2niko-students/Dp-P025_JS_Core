const hello = function(){
    console.log(this);
    console.log(`Myaooo, my name is ${this.name}`);
}


const cat = {
    name : 'Хвостик',
    weight : 5,
    sex : 'male',
    hello : hello
}, catW = {
    name : 'Зіра',
    weight : 2.5,
    sex : 'female',
    hello : hello
};

var name  = 'окно';
hello();

class Cat{
    legs = 4;
    eyes = 2;
    ears = 2;
    isFur = true;
    btnInfo = document.querySelector('.getInfo');
    btnHello = document.querySelector('.hello');
    #DNA = 'ATTGTAGTCCTATCATGCACATGAC';

    constructor(name, sex, weight, dob, owner){
        // console.log('I was created');
        // console.log(name, sex, weight);
        // console.log(this);
        this._name = name;
        this.sex = sex;
        this.weight = weight;
        this.dob = dob;
        this.owner = owner;
        this.age = (new Date()).getFullYear() - this.dob;
        this.btnInfo.addEventListener('click', this.info);
        this.btnHello.addEventListener('click', this.hello.bind(this));
    }

    hello(){
        console.log(this);
        console.log(`Hello, I am an ${this._name}`);
    }

    info = () => {
        console.log(`---------------------------
Name : ${this._name}
Sex : ${this.sex}
Age : ${this.age}
Weight : ${this.weight} kg
DNA : ${this.#DNA}
---------------------------`);
    }

    getName(){
        return `${this._name} ${this.owner}${this.sex === 'male' ? 'ovych' : 'ovna'}`;
    }

    get name(){//getter
        return this._name;
    }

    set name(str){
        this._name = str;
    }
}

const cat3 = new Cat('Хвостик', 'male', 5, 2010, 'Andrii');

// cat3.hello();
// console.log(cat3);
// cat3.info();

cat3.name = 'Hvostik';

console.log(cat3.name);
console.log(cat3._name);
console.log(cat3.getName());

