const devs = [
    {
        name : 'Nick',
        isCamera : true,
        city : 'Dnipro',
        sex : 'm'
    },
    {
        name : 'Andrii',
        isCamera : true,
        city : 'Dnipro',
        sex : 'm'
    },
    {
        name : 'Sviatoslav',
        isCamera : true,
        city : 'Dnipro',
        sex : 'm'
    },
    {
        name : 'Svitlana',
        isCamera : true,
        city : 'Dnipro',
        sex : 'f'
    },
    {
        name : 'Bohdana',
        isCamera : false,
        city : 'Chernivtsi',
        sex : 'f'
    },
    {
        name : 'Nazarii',
        isCamera : false,
        city : 'Novomoskovsk',
        sex : 'm'
    },
    {
        name : 'Andrii',
        isCamera : false,
        city : 'Dnipro',
        sex : 'm'
    },
    {
        name : 'Alina',
        isCamera : false,
        city : 'Chernivtsi',
        sex : 'f'
    }
];

//Фильтрация. Получить массив из тех, у кого включена камера
const camerOn = devs.filter((el, i, arr) => {
    return el.isCamera;
});

const women = devs.filter(el => el.sex === 'f');

console.log(camerOn);
console.log(women);

const roles = ['Knight', 'Scout', 'Cliric', 'Mage', 'Rogue', 'Shaman', 'Witch', 'Archer'];
const randRole = () => {
    return roles[~~(Math.random() * roles.length)];
}

//Map. Сформировать список игроков

const gamers = devs.map(el => {
    let role = randRole();
    if(role === 'Witch' && el.sex === 'm'){
        role += 'er';
    }
    el.role = role;
    return el;
});

const isCameraOn = devs.map(el => {
    return el.isCamera;
});

console.log(isCameraOn);

//Reduce 

const isCameraCount = devs.reduce((acc, el, i, arr) => {
    acc += el.isCamera ? 1 : 0;
    return acc;
}, 0);

console.log(isCameraCount);

const namesLength = devs.reduce((acc, el) => {
    const len = acc + el.name.length;
    return len;
}, 0);

console.log('length of names: ', namesLength);

const namesStat = devs.reduce((acc, el) => {
    acc.len += el.name.length;
    acc.name += el.name;
    return acc;
}, { len : 0, name : ''});

console.log(namesStat);