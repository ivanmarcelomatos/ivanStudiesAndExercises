fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
        title: 'PATCH using fetch API'
    }),
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))