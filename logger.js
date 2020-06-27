const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg});
    }
}

module.exports = Logger;

/*

// const Person = require('./person');
//
// const person = new Person('John Doe', 30);
//
// person.greeting();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener: ', data));

logger.log('Hello world');
logger.log('Goodbye world');
logger.log('Hi world');
 */