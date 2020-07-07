function order(str){
    return str.split(' ').sort(orderSort).join(' ');
}

function orderSort(a, b){
    const reDig = /\d/;
    return a.match(reDig) - b.match(reDig);
}


/**
 *  is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
    "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

 */

//  console.log(order("is2 Thi1s T4est 3a"));
//  console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

const testArr = [11, 33, 653, 3434, 'dog', 55];

let sum = 0;
// for(let i = 0; i < testArr.length; i++){
//     console.log(i, testArr[i]);
//     if(!isNaN(+testArr[i])){
//         sum += testArr[i];
//     }
// }

testArr.forEach((el, i) => {
    console.log(i, el);
    sum += !isNaN(+el) ? el : 0;
});


console.log('summ: ', sum);