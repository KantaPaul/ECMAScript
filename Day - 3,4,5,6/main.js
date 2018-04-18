// example var let const
var width = 100;
let height = 100;
const key = 'abc123';

// var example
console.log(width);
width = 200;
console.log(width);
var w;
function myfun() {
    w = 10;
    console.log(w);
}
myfun();
console.log(w);

// var functionscope
// let and const blockscope

// example of const
const person = {
    name: 'Kanta',
    age: 20
}
console.log(person);
person.age = 25;
console.log(person);

const pobon = Object.freeze(person);

// for loop use var
for (var i = 1; i <= 10; i++) {
    // console.log(i * 5);
    setTimeout(() => {
        console.log('Number is ' + i);
    }, 1000);
}

for (let i = 1; i <= 10; i++) {
    // console.log(i * 5);
    setTimeout(() => {
        console.log('Number is ' + i);
    }, 1000);
}

// arrow function and map loop
let names = ['Kanta', 'Kanto', "Pobon"];
// simple map function
let nmaeList = names.map(function (name) {
    return `${name} Paul`
});
console.log(nmaeList);
// simple arrow function
let nmaeList2 = names.map((name) => {
    return `${name} Paul`
});
console.log(nmaeList2);
// if multi params
let nmaeList3 = names.map((name, i) => {
    return `${name} Paul`
});
console.log(nmaeList3);
// if single params
let nmaeList4 = names.map(name => {
    return `${name} Paul`
});
console.log(nmaeList4);
// complex arrow function
let nmaeList5 = names.map(name => `${name} Paul`);
console.log(nmaeList5);
// task
let myName = (name) => alert(`My Name ${name}`);
// myName('Kanta');

// list of array
let race = "100 Metter";
let winners = ["A", "B", "C"];
let win = winners.map((winner, i) => ({Name: winner, Race: race, Palace: i + 1}));
console.table(win);

// filter
let ages = [20,30,10,50,100,80,70,60];

// simple function
let olds = ages.filter(function (age) {
    return age >= 50;
})
console.log(olds);

// arrow function
let old = ages.filter(age => age >= 50);
console.log(old);

// class add on click function
let box = document.querySelector('.box');
box.addEventListener('click', function() {
    let first = 'opening',
        second = 'open';
    
    if (this.classList.contains(first)) {
        [first, second] = [second, first]
    }
    this.classList.toggle(first);
    setTimeout(() => {
        this.classList.toggle(second);
    }, 500)
});

// calculate bill
// simple function
function  calculateBill(bill, tax, tip) {
    if (tax === undefined) {
        tax = .15;
    }
    if (tip === undefined) {
        tip = .13;
    }
    return (bill + (bill * tax) + (bill * tip));
}
let totalBill = calculateBill(100);
console.log(totalBill);

// es6 function
function  calculateBill(bill, tax = .15, tip = .13) {
    return (bill + (bill * tax) + (bill * tip));
}
let totalBills = calculateBill(150, undefined, .25);
console.log(totalBills);