// resolve multiple promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 ok! Timeout!');
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok!');
});

const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok!');
});




const resolveAll = Promise.race([p1, p2, p3]).then((data) => {
    console.log(data);
});

console.log('after .all()');