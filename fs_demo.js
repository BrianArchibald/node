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
// can use append file inside write file function

// read to a file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
  if(err) throw err;
  console.log(data);
});

// rename
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err) {
  if(err) throw err;
  console.log('renaming');
});
