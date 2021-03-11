const http = require('http');

// create server object
http.createServer((req, res) => {
  //write response
  res.write('yo yo');
  res.end()
  // first param is port
}).listen(5000, () => console.log('server running,'))
