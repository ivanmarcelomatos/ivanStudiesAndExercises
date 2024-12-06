//Fetch request on Github API

const username = 'ivanmarcelomatos';

fetch(`https://api.ERROR.github.com/users/${username}`, {
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
    .catch((error) => {
        console.log(`There was an error: ${error}`);
    })