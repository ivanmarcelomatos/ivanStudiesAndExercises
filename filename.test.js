const axios = require('axios');


function getGithubUserData() {
  const username = 'ivanmarcelomatos';

  return axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
          return response.data;
      })
};



test('the data.name is Ivan', async () => {
  await expect(getGithubUserData()).resolves.toHaveProperty('name', 'Ivan');
});