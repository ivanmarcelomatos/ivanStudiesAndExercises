// promise creation
const myPromise = new Promise((resolve, reject) => {
    const name = 'Matheus';

    if(name === 'Matheus') {
        resolve('user Matheus found');
    } else {
        reject('User Matheus was not found');
    }
});

myPromise.then(data => {
    console.log(data);
});