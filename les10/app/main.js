import { Color } from './Color.js';
import { User } from './User.js';



let a = 33;
for(let i = 0; i < 10; i++){
    console.log(`%c${Date.now()}`, `background-color: ${Color.getRandomColor()}; padding : 10px; border: 1px dotted grey;`);
}

const users = [];

document.querySelector('.btn_user_generate').addEventListener('click', () => {
    users.push(new User());
});
