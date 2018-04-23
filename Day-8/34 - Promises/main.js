// 34 - Promises
console.log('Fetching the post');
let posts = fetch('https://jsonplaceholder.typicode.com/users');
console.log('Done!');
console.log(posts);
posts
    .then(data => data.json())
    .then(data => {
        console.log(data); 
        console.log(data[0].name);
        // let myData = data;
        // console.log(myData);
        // let dataArray = Array.from(myData);
        // let [address,company,...info ] = myData;
        // console.log([address,company,info])
    })
    .catch(err => {
        console.error(err);
    });