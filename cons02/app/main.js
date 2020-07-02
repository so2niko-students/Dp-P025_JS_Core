const eggs = ~~(Math.random() * 18 + 1);
const cost = eggs * 1.8;
const eggsName = `, яйца(${eggs})`;

let bill = 123;
let products = 'Хлеб, молоко, огурцы, сгущеное молоко';

switch(eggs){
    case 6 :
    case 12 :
    case 18 : {
        bill += cost;
        products += eggsName;
        break;
    }
    default: {
        console.log('В этот раз без яиц');
    }
}

const drinks = ', Coca Cola';
const ml = ~~(Math.random() * 1801 + 200);
const cocaPrice = ml * .015;


switch(true){
    case ml >= 500 && ml <= 1000: {
        bill += cocaPrice;
        products += drinks;        
        break;
    }
    case ml >= 1500 && ml <= 2000: {
        bill += cocaPrice * 2;
        products += `${drinks}(2)`;  
        break;
    }
}

console.log(`Выпало яиц: ${eggs}`);
console.log(`Наличие тары: ${ml}, ${cocaPrice}`);
console.log(`${products}: ${bill}`);