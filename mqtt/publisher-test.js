const mqtt = require('mqtt');
const config = require('./config/config');

const publisher = mqtt.connect(config.publisher.uri, config.publisher.options);

publisher.on('connect', () => {
    console.log('Connected Broker');

    publisher.publish('test', 'test');
});

