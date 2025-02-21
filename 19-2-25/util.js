const util = require('util');
const fs = require('fs');


const formattedString = util.format('Hello, %s! Today is %s.', 'Alice', 'Wednesday');
console.log(formattedString);


const obj = { name: 'Alice', age: 25, address: { city: 'New York', zip: '10001' } };
const inspectedObj = util.inspect(obj, { showHidden: false, depth: 2, colors: true });
console.log(inspectedObj);



readFileAsync('example.txt', 'utf8')
  .then(data => console.log('File Contents:', data))
  .catch(err => console.error('Error:', err));


const fetchData = async () => {
  return 'Fetched data successfully!';
};


const fetchDataCallback = util.callbackify(fetchData);

fetchDataCallback((err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log(result); 
  }
});

const oldFunction = util.deprecate(() => {
  console.log('This is an old function!');
}, 'oldFunction is deprecated. Please use a new function.');

oldFunction();
