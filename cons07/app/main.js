//Arrays
const arr = [];
arr.push(3);
arr.push(33);
arr.push(333);
arr.push(3);
console.log(arr);

//Set - Массив уникальных значений
const unic = new Set();
//Внести данные
unic.add(10);
unic.add(3);
unic.add(5);
unic.add(10);
unic.add('10');
//Проверка на наличие значения
console.log(unic.has('5'));
//Удаление данных
unic.delete(3);
// console.log(unic.size);
// unic.clear();
unic.forEach(el => {
    console.log(el);
})
console.log(unic);

//Map - объект, в качестве ключей могут быть объекты и примитивы
const m = new Map();
const dnipro = { city : 'Dnipro' };
//Внесение значений
m.set('name', 'Nick');
m.set(33, 'Тридца три');
m.set(true, 'Истина');
m.set(dnipro, 'город Днепр');
m.set({ city : 'Dnipro' }, 'город Днепр 2');
m.set(dnipro, 'город Днепр 3');

//проверка на наличие
console.log(m.has(33));
//получение данных
console.log(m.get(33));
//удаление данных
console.log(m.delete(33));
// console.log(m.clear());
m.forEach(el => {
    console.log(el);
});
[...m.keys()].forEach(el => {
    if(typeof el === 'object'){
        el.val = Math.random();
    }
});


console.log(m);