var evt = require('events');

var emitter = new evt.EventEmitter();


emitter.on('event', function(){
    setImmediate(() => {
       console.log("Listener № 1");
 });    
});

function Test()
{
    console.log('Hello Test');
}

function TestOnce()
{
    console.log('Hello TestOnce');
}

emitter.on('event', Test);
emitter.once('event', TestOnce);

emitter.on('event', function(){
    setImmediate(() => {
       console.log("Listener № 2");
 });    
});

emitter.emit('event');