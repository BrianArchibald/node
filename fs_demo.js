const fs = require('fs');
const path = require('path');

// Make dir, there is a sync and async version
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
  if(err) throw err;
  console.log('made test dir');
});
//
// create, write to a file
fs.writeFile(path.join(__dirname, 'hello.txt'), 'hello world', function(err) {
  if(err) throw err;
  console.log('made a file hello.txt');
});

// writeFile will overwrite a file, can use appendFile to add to a file
