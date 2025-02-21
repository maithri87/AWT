const fs = require('fs');
const path = require('path');

// Create a readable stream from a file
const readableStream = fs.createReadStream(path.join(__dirname, 'input.txt'), { encoding: 'utf8' });

// Create a writable stream to another file
const writableStream = fs.createWriteStream(path.join(__dirname, 'output.txt'), { encoding: 'utf8' });

// Pipe data from readable stream to writable stream
readableStream.pipe(writableStream);

// Event listener for 'data' event - whenever data is read
readableStream.on('data', (chunk) => {
  console.log(`Reading chunk: ${chunk}`);
});

// Event listener for 'end' event - when the reading is complete
readableStream.on('end', () => {
  console.log('Reading finished.');
  console.log('Writing data to output.txt...');
});

// Event listener for 'finish' event - when the writing is complete
writableStream.on('finish', () => {
  console.log('Data has been written to output.txt');
});

// Event listener for error handling
readableStream.on('error', (err) => {
  console.error('Error while reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error while writing to file:', err);
});
