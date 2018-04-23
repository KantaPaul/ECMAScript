// 32 - The ...rest param in Functions and destructuring

let runner = ['Kanta Paul', 123, 5.5,2,3.5,4.5,2.5];
let [name, id, ...runs] = runner;
console.log([name, id, runs]);

let team = ['Captain', 'Asst Captain', 'Player 1','Player 2','Player 3'];
let [captain, asst, ...player] = team;
console.log([captain, asst, player]);