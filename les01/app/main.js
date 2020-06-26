console.log('Hello world');
//Переменные
var num1 = 1;
let num2 = 2;
const curYear = 2020;

//Условия
//Если (что-то), то (что-то), иначе (что-то)


num1 = 10000;


if(curYear > num1){
    console.log(curYear);
}else{
    console.log('Неожиданно, но сейчас что-то другое');
}

if(num1 > num2){
    console.log('num1 > num2');
}

//Операторы
//Операция присваивания
num1 = 10000;
//num1, 10000 - операнд
//= - оператор присваивания (бинарный)

//Операция сравнения
num1 > num2
//operands : num1, num2
//operator : > (logical)
//   <, >=, <=, ==, ===, !=, !==

//mathematic
/**
 *   +
 *   -
 *   *
 *   / 
 *   %  - остаток от деления
 *   ** - возведение в степень
 */

 //Унарные операторы
 //Логическое отрицание  ! - неявный оператор преобразования в логический тип данных
 //Унарный плюс          + - неявный оператор преобразования в число
 //Унарный минус         - 

//  const answ = +prompt('Enter a random number');
//  console.log(typeof answ);
 //prompt - метод, выводящий на екран сообщение и позволяющий ввести данные в строку ввода
//  alert('Просто показывающий сообщение');

 //Типы данных
 //String - строка
 let str = 'Happy new year';
 let str2 = "Happy new year";
 let str3 = `Happy ${curYear} new year`;
 console.log(str3);

 //Number - число
 // 23432
 // -99
 // 54654.222254432432

 //Boolean - логический
 // true / false
 const isDone = true;

 //Object - сложный тип данных

 let a = 33;
 let b = a; //копирование по значению

 a = a * 2;

 console.log(a, b);

 let c = {
     n : 100
 };

 let d = c;//копирование по ссылке

 c.n = 300;

 console.log(c);
 console.log(d);

 //undefined - забыть
 //null      - явно забить