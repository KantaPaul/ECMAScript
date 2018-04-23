// 33 - Object Literal Upgrades
let firstName = 'Snickers',
    lastName = 'Wes Bos',
    age =2,
    bread = 'King Charles';

let dog = {
    firstName, lastName, age, bread
}

console.log(dog);

function invertColor(color) {
    return '#' + ('000000' + (0xFFFFFF ^ parseInt(color.substring(1), 16)).toString(16)).slice(-6);
};

let key = 'Pocket Color',
    value = '#ff0000';

let tShirt = {
    [key]: value,
    [`${key} Opposite`]: invertColor(value)
};

console.log(tShirt);

let keys = ['Size', 'Color', 'Weight'];
let values = ['Medium', 'Red', 100];

let myShirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift()
}

console.log(myShirt);