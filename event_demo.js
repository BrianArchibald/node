const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter { }

// init
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on('event', () => console.log('FIRED!!'));

myEmitter.emit('event');
