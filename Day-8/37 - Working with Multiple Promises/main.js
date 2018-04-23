// 37 - Working with Multiple Promises
let weather = new Promise(resolve => {
    resolve ({temp: 29, info: 'Sunny day'});
})

let tweets = new Promise(resolve => {
    resolve('Hi i am very lazy');
});

Promise.all([weather, tweets]).then(data => {
    console.log(data);
    let [weather, tweets] = data;
    console.log(weather, tweets);
});

let albums = fetch('https://jsonplaceholder.typicode.com/albums');
let todos = fetch('https://jsonplaceholder.typicode.com/todos');

Promise.all([albums, todos]).then(responses => {
    console.log(responses);
    return Promise.all(responses.map(res => res.json()));
}).then(responses => {
    console.log(responses);
});