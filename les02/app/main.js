/***
 * если(условие){
 *    Действия если да
 * } иначе {
 *    Действия если
 * }
 * 
 */
if('Dnipro'){
    console.log('city');
}


if('Dnipro'){
    console.log('city');
}else{
    console.log('В смысле?');
}

//Тернарный оператор
// (если) ? { действие ДА } : { действие НЕТ };
// если ? действие ДА : действие НЕТ;

const n = -33;
const ev = n % 2 ? 'нечётное' : 'чётное';
let ev2;

if(n % 2){
    ev2 = 'нечётное';
} else {
    ev2 = 'чётное';
}

let a = 3, b = 2, c = 1, d = 0;

const light = ['green', 'yellow', 'red'][~~(Math.random() * 3)];

switch(light){
    case 'green' : {
        console.log('%cGo-go-go!', `color: ${light}`);
        break;
    }
    case 'yellow' : {
        console.log('%cWait, prepare', `color: ${light}; background-color: black;`);
        break;
    }
    case 'red' : {
        console.log('%cSTOP!', `color: ${light}`);
        break;
    }
    default : {
        console.log('???');
        break;
    }
}