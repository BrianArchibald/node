const person = require('./person');
const Logger = require('./logger');

// console.log(person);

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called listener' , data));

// logger.log('hello');
// logger.log(' 2 hello');
// logger.log(' 3 hello');
//
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.end('<h1>HOME</h1>');
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('server running on....'));
