const axios = require('axios');

function getGithubUserData(callback) {
  const username = 'ivanmarcelomatos';

  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      callback(error);
    });
}

test('the data.name is Ivan', (done) => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data.name).toBe('Ivan');
      done();
    } catch (error) {
      done(error);
    }
  }

  getGithubUserData(callback);
});
