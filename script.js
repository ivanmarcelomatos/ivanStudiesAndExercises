//Fetch request on Github API

const username = 'ivanmarcelomatos';

fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
})
    .then((response) => {
        console.log(typeof response);
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log('The name is: ' + data.name);
    })