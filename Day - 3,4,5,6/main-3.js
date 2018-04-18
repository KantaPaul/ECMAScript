let name = 'Snickers',
    age = 2;

// 12 - Template Strings Introduction ==> old version
let sentence = 'My dog ' + name + ' is ' + age * 7 + ' years old ';
console.log(sentence);

// 12 - Template Strings Introduction ==> latest version
let sentence2 = `My dog ${name} is ${age * 7} years old `;
console.log(sentence2);

let person = {
    name: 'Kanta',
    post: 'Web Developer',
    location: 'Dhaka',
    bio: `Hi i am Kata. I am live in Dhaka`
}

let markup = `
    <div class="person">
        <h2>${person.name}</h2>
        <h3>${person.post}</h3>
        <strong>${person.location}</strong>
        <p>${person.bio}</p>
    </div>
`;

document.body.innerHTML = markup;

console.log(markup);

// list of dogs
let dogs = [
    {name: 'A', age: 2},
    {name: 'B', age: 5},
    {name: 'C', age: 7}
];

let dogList = `
    <ul>
        ${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
    </ul>
`;
document.body.innerHTML = dogList;
console.log(dogList);

// song
let song = {
    album: "X",
    artist: "Z",
    label: "Y"
}
// if label is here show
let songs = `
    <div class="song">
        <h4>Album: ${song.album} - Artist: ${song.artist}</h4>
        ${song.label ? `<h6>Label : ${song.label}</h6>`: ''}
    </div>
`;

document.body.innerHTML = songs;

// sports list
let sports = {
    sportName: 'Cricket',
    country: 'Bangladesh',
    playerName: ['Sakib', 'Tamim', 'Mushfiq']
}

function playerList(players) {
    return `
        <ul>
            ${players.map(player => `<li>${player}</li>`).join("")}
        </ul>
    `
}

let sportList = `
    <div>
        <h2>${sports.sportName}</h2>
        <h3>${sports.country}</h3>
        ${playerList(sports.playerName)}
    </div>
`;

document.body.innerHTML = sportList;