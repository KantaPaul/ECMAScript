let names = ['A', 'B', 'C', 'D'];

for (const name of names) {
    // example of break
    // console.log(name);
    // if (name === 'C') {
    //     break;
    // }
    // example of continue
    if (name === 'C') {
       continue;
    }
    console.log(name);
}

let samples = {
    name: 'Apple',
    color: 'Red',
    weight: '100gm',
    quantity: 1
}

for (const sample in samples) {
    var value = samples[sample];
    console.log(value, sample);
}

let p = document.querySelectorAll('ul li');
let pA = Array.from(p);
let element = pA.map(ele => ele.textContent)
console.log(element);

// arguments to array
function sumAll(){
    // console.log(Array.from(arguments));
    let ma = Array.from(arguments);
    return ma.reduce((a,b) => a + b, 0);
}
console.log(sumAll(1000,11,10,12,15,16,17,18,19,20));

// some evry
let adoults = [30,18,17,16];
let youngs = [1,2,4,5];
let adultGuy = adoults.some(adoult => adoult >= 18);
let youngGuy = youngs.every(young => young >= 18);
console.log(adultGuy);
console.log(youngGuy);

// spreads
let letters = document.querySelector('.jump');
let spans = breakWord(letters.textContent);
console.log(spans);
letters.innerHTML = spans;

function breakWord(word) {
    return [...word].map(letter => `<span>${letter}</span>`).join('');
}

// comments
let comments = [
    {id: 2542, text: 'I love dog'},
    {id: 2842, text: 'I love cat'}
];
let id = '';
let commentIndex = comments.findIndex(comment => comment.id === id);
let newComment = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex)];
// this.setState({comments: newComment});
console.log(newComment)