// 35 - Building your own Promises

let p = new Promise((resolve, reject) => {
    resolve ('Hi kanta paul');
    // reject(Error('Simple error'));
})

p.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});