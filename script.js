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



//then chaining
const myPromise2 = new Promise((resolve, reject) => {
    const name = 'Matheus';

    if(name === 'Matheus') {
        resolve('user Matheus found');
    } else {
        reject('User Matheus was not found');
    }
});

myPromise2.then(data => {
    return data.toLowerCase();
})
    .then((modifiedString) => {
        console.log(modifiedString);
    })








// return from .catch()
const myPromise3 = new Promise((resolve, reject) => {
    const name = 'John';

    if(name === 'Matheus') {
        resolve('user Matheus found');
    } else {
        reject('User Matheus was not found');
    }
});

myPromise3.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(`An error occurred: ${error}`)
})