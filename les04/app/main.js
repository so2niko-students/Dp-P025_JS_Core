console.log('Sum', sum(1, 44, 34, 55, 77, 3, 21));


//declaration
function sum(a, b){
    console.log(arguments);
    let s = 0;
    const argLen = arguments.length;
    for(let i = 0; i < argLen; i++){
        s += arguments[i];
    }
    return s;
}

//expression
const multi = function(a, b){
    return a * b;
}

console.log('Multi', multi(3, 44));

const pow = function(a, p = 2){
    // p = p || 2;//значения по умолчанию
    return Math.pow(a, p);
}

console.log('Pow', pow(3));
console.log('Pow', pow(3, 9));

//Методы массивов
const pokemons = [
    'Pikachu',
    'Slowpoke',
    'Bulbasaur',
    'Mitoo',
    'Raichu',
    'Charizard'
];
//push
//Вставляет в зад
pokemons.push('Meowt');

//pop
//Вырезает из конца и возвращает значение 
const m = pokemons.pop();
console.log('pop', m);

//unshift
//Вставляет в голову
pokemons.unshift(m);

//shift
//Вырезает из головы и возвращает значение
console.log('shift', pokemons.shift());

console.log(pokemons);

//Копирование из середины
//slice(index_start, index_end <-- не включая Этот элемент)
console.log(pokemons.slice(1, 3));
console.log(pokemons.slice(1));
console.log(pokemons.slice(1, -1));

//Изменение массива
//splice(index_start, count_delete, [elements to insert])
// console.log(pokemons.splice(1, 2));
// console.log(pokemons.splice(0, 1)); -- shift
//console.log(pokemons.splice(-1, 1)); -- pop

//console.log(pokemons.splice(0, 0, m)); -- unshift

//console.log(pokemons.splice(-1, 1, pokemons[pokemons.length - 1], m)); -- push

console.log(pokemons);

function pop(arr){
    
}