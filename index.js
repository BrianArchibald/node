const person = require('./person');
const Logger = require('./logger');

console.log(person);

const logger = new Logger();

logger.on('message', (data) => console.log('Called listener' , {data}));

logger.log('hello');
