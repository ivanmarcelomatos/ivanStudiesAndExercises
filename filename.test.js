const axios = require('axios');

function getGithubUserData() {
  const username = 'ivanmarcelomatos';

  return axios.get(`https://api.ERROR.github.com/users/${username}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error('Network error occurred');
    });
}

test('the getGithubUserData() fails with an error', async () => {
  expect.assertions(1);
    return getGithubUserData().catch (error => expect(error.message).toMatch('Network error occurred'));
});
