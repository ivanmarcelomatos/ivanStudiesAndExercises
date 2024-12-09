const axios = require('axios');


function getGithubUserData() {
  const username = 'ivanmarcelomatos';

  return axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
          return response.data;
      })
};



test('the data.name is Ivan', () => {
  return getGithubUserData().then(data => {
    expect(data.name).toBe('Ivan');
  });
});