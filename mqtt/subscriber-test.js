const mqtt = require('mqtt');
const config = require('./config/config');

const subscriber = mqtt.connect(config.subscriber.uri, config.subscriber.options);

subscriber.on('connect', () => {
    console.log('Connected Broker');
    subscriber.subscribe('test');
});

subscriber.on('message', (topic, message) => {
    console.log('Topic:', topic);
    console.log('Message:', message.toString());
});