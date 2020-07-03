//Циклы

//2 типа циклов

//Цикл с предусловием
/**
 * пока(условие){
 *  тело цикла;
 * }
 */

let i = 0;
while(i < 10){
    console.log(`${i}: бесконечный цикл`);
    i += 1;
}





/**
 * для(действия_до_цикла; условие; действие_после_итерации){
 *  тело цикла;
 * }
 * 
 * 
 */

JEDI :
for(let i = 0, k = 10; i < 10 && k < 30; i++, k += 3){
    if(i % 3 == 0){
        continue JEDI;
    }
    console.log(`${i}: а я в for. ${k}`);
}

let j = 10;
for(; j--;){
    if(j == 5){
        break;
    }
    console.log(`обратный j: ${j}`);
}

//Цикл с послеусловием
/**
 * делай{
 *  тело цикла
 * }пока(условие);
 */

do{
    console.log('Я точно буду в консоли');
}while(false);
