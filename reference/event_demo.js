const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const eventEmitter = new MyEmitter();

eventEmitter.on('event', () => console.log('Event fired!'));

eventEmitter.emit('event');