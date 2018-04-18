function highlight(strings, ...value) {
    let str = '';
    strings.forEach((string, i) => {
        str += `${string} <span contenteditable class="hl">${value[i] || ''}</span>`
    });
    return str;
    // debugger;
}

let name = 'A',
    age = 30,
    gender = 'male';

let sentence = highlight`My name is ${name} and i am ${age} ${age > 1 ? 'years' : 'year'} old. He is a ${gender} dog.`;

console.log(sentence);
document.body.innerHTML = sentence;