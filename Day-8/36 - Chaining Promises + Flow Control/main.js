// 36 - Chaining Promises + Flow Control 
let myPosts = [
    {title: 'I love js', author: 'Me', id: 1},
    {title: 'I love CSS', author: 'You', id: 2},
    {title: 'I love HTML', author: 'You and Me', id: 3}
];

let authorInfo = [
    {name: 'Me', twitter: '@me', bio: 'I am bangladeshi'},
    {name: 'You', twitter: '@you', bio: 'I live in Dhaka'},
    {name: 'You and me', twitter: '@youandme', bio: 'I live in shyamoli'}
];

function getPostById(id) {
    return new Promise((resolve, reject) => {
        let post = myPosts.find(post => post.id === id);
        if (post) {
            resolve(post);
        } else {
            reject(Error('Something else'));
        }
    })
}

function hydrateAtuhors(post) {
    return new Promise((resolve, reject) => {
        // debugger;
        let authorDetails = authorInfo.find(author => author.name === post.author);
        if(authorDetails) {
            post.author = authorDetails;
            resolve(post);
        } else {
            reject(Error('Something is not right'));
        }
    })
}

getPostById(1).then(post => {
    console.log(post);
    return hydrateAtuhors(post);
}).then(post => {
    console.log(post);
}).catch(err => {
    console.error(err);
});