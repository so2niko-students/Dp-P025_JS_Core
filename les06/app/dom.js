//Ищущие методы

//ПОиск по ID -- 1 элемент
const e3 = document.getElementById('e3');
const e3_ = document.querySelector('#e3');

//Поиск по классу -- Возвращает список
const reds = document.getElementsByClassName('red');
const reds_ = document.querySelectorAll('.red');

//Поиск по тегу -- Возвращает список
const strongs = document.getElementsByTagName('strong');
const strongs_ = document.querySelectorAll('strong');

//Поиск по имени -- Возвращает список
const q = document.getElementsByName('q');
const q_ = document.querySelectorAll('[name="q"]');


console.dir(q_);