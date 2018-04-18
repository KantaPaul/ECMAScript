let first = "Kanta",
    about = `I love to do evil <img src="http://unsplash.it/200/200?random" />`;

let markup = `
    <h2>${first}</h2>
    <p>${about}</p>
`;

let app = document.querySelector('.app');
app.innerHTML = markup;

let car = "BMW";
let color = "Black";

function letpad(str, length = 20) {
    return `> ${' '.repeat(length - str.length)}${str}`
}

console.log(letpad(car));
console.log(letpad(color));

// 20 - Swapping Variables with Destructuring
let person = {
    firstN: 'Kanta',
    lastN: 'Paul',
    twitter: 'https://twitter.com/'
};

let {firstN, lastN, twitter} = person;
console.log(firstN);

let info = {
    fn: 'A',
    lN: 'B',
    links: {
        social: {
            twt: 'https://twitter.com/',
            fb: 'http://facebook.com',
            inst: 'https://www.instagram.com/'
        },
        web: {
            google: 'https://www.google.com/'
        }
    }
}

// let {twt, fb, inst} = info.links.social;
let {twt:twts, fb:fbs, inst:insta} = info.links.social;

console.log(twts);

let details = ['Kanta', 'Paul', 'Pobon'];
let [fn, mn, ln] = details;
console.log([fn, mn, ln]);

let data = 'Basketball,Sports,145,23,Kanta,Paul';
let [item, cate, id, inven, ...val] = data.split(',');
console.log(item, cate, id, inven, ...val);

let team = ['Kanta', 'ABC', 'DEF', 'GHI'];
let [...mem] = team;
console.log(...mem)

// 21 - Destructuring Functions - Multiple returns and named defaults
function tipCalc(bill, tip, tax) {
    return (bill + (bill * tip) + (bill * tax));
}
let tip = tipCalc(10,103,15);
console.log(tip);

function tipCalcs({tip = .13, bill = 100, tax = .15} = {}) {
    return (bill + (bill * tip) + (bill * tax));
}
let myTip = tipCalcs();
console.log(myTip);

// 22 - The for of Loop in Action
let cuts = ['a', 'b', 'c', 'd'];
for (var cut of cuts.entries()) {
    console.log(cut);
}
for (var [i, cut] of cuts.entries()) {
    console.log(`${cut} is ${i + 1}`);
}

function addNumber () {
    let total = 0;
    for (let num of arguments) {
        total += num;
    }
    console.log(total);
    return total;
}

addNumber(10,15,18,10,20,30,50);

let names = "Kanta Paul";
for (const name of names) {
    // console.log(name)
    // `<span>${name}</span>`;
    var n = `<span>${name}</span>`;
    let app = document.querySelector('.app');
    let p = document.createElement('p');
    p.innerHTML = n;
    app.appendChild(p)
}

let ps = document.querySelectorAll('p');
// console.log(ps);
for (const para of ps) {
    console.log(para);
    para.addEventListener('click', function () {
        console.log(this.textContent);
    })
}