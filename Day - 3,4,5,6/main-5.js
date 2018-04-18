function abbr(strings, ...vlaues) {
    // debugger;
    let abbre = vlaues.map(value => {
        if (abr[value]) {
            return `<abbr title="${abr[value]}">${value}</abbr>`
        }
        return value;
    });
    console.log(abbre);
    return strings.reduce((sentence, string, i) =>{
        return `${sentence}${string}${abbre[i] || ''}`
    }, '')
}

let abr = {
    HTML: 'Hyper Text Markup Language',
    CSS: 'Cascading Style Sheet',
    JS: 'Javascript'
}

let first = 'Kanta',
    last = 'Paul';

let sentence = abbr`Hi i am ${first} ${last}.I love ${'HTML'}, ${'CSS'} and ${'JS'}`;
console.log(sentence);

let app = document.querySelector('.app');
let p = document.createElement('p');
p.innerHTML = sentence;
app.appendChild(p);