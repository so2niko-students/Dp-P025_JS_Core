//map 
const fruits = ['Ананас', 'Яблоко', 'абрикос', 'Банан'];
const firstLetters = fruits.map(el => el[0]);
console.log(firstLetters);

const firstLettersRed = fruits.reduce(( acc, el ) => {
    acc.push(el[0]);
    return acc;
}, []);

console.log(firstLettersRed);

//filter
const letterA = fruits.filter(el => el[0].toLowerCase() === 'а');

console.log(letterA);

const letterARed = fruits.reduce(( acc, el ) => {
    if(el[0].toLowerCase() === 'а'){
        acc.push(el);
    }
    return acc; 
}, []);

console.log(letterARed);

//forEach
fruits.forEach(( el, i ) => {
    console.log(`${i}: ${el}`);
});

fruits.reduce(( acc, el, i) => {
    console.log(`${i}: ${el}`);
}, null);

//every -- true/false
const isUpperCase = fruits.every(el => {
    console.log(el);   
    return el[0].toUpperCase() === el[0];
});

console.log(isUpperCase);
console.clear();
//some -- true/false
const isLowerCase = fruits.some(el => {
    console.log(el);   
    return el[0].toUpperCase() === el[0];
});

console.log(isLowerCase);
console.clear();

//Поиск элемента в массиве
const lowerCase = fruits.find(el => el[0].toLowerCase() === el[0]);

console.log(lowerCase);