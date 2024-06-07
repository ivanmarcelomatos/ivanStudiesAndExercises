import { createReadStream } from 'fs';

const readStream = createReadStream('./filename.txt', 'utf8');

let fileContent = '';

/* Listener for the 'data' event to accumulate data chunks */
readStream.on('data', function (chunk) {
  fileContent += chunk;
});

/* Listener for the 'end' event which is called when the entire file has been read */
readStream.on('end', function () {
  console.log('File content:\n', fileContent);
});

/* Listener for the 'error' event to handle errors */
readStream.on('error', function (err) {
  console.error('Error reading the file:', err);
});
