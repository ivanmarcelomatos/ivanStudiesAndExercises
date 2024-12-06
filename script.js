// resolve multiple promises
const p1 = new Promise((resolve, reject) => {
    resolve('p1 ok!');
});

const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok!');
});

const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok!');
});




const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
});