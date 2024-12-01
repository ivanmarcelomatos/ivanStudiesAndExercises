// GET com Fetch
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((json) => {
        console.log(json);
    })
      .catch((error) => {
        console.log(error);
      })

//GET com Axios
axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    })



// POST Data
const data = {
    title: "Some Title",
    content: "Some Content...",
    userId: 1
}

// POST com Fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then((json) => {
    console.log(json);
    })
    .catch((error) => {
    console.log(error);
    })





    //POST com Axios
    axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })