// select all list
// convert to nodelist ===> array
// nodelist
    // let lists = (document.querySelectorAll('[data-time]');
// array list
    let lists = Array.from(document.querySelectorAll('[data-time]'));
    console.log(lists);
// filter by flexbox
    let myList = lists.filter(list => list.textContent.includes('Flexbox'))
// map down to time list
    .map(list => list.dataset.time)
// map array of seconds
    .map(timeCode => {
        let parts = timeCode.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
        // console.log(parts);
    })
// reduce to get total
    .reduce((runningtotal, seconds) => runningtotal + seconds, 0)


    console.log(myList);