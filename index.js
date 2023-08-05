console.log('Start!')

let timeout = 0;
setTimeout(() => {
    console.log('TimeOut!')
}, timeout);

Promise.resolve('Promise!')
    .then(res => console.log(res))

console.log('End!')

//Start!
//End!
//Promise!
//TimeOut!

