const mqtt = require('mqtt');
const config = require('./config/config');

const subscriber = mqtt.connect(config.subscriber.uri, config.subscriber.options);

const connect = () => {
    console.log('Connected Broker');
    subscriber.subscribe('test');
};
const reconnect = () => console.log('Retry');
const close = () => console.log('Close Connection');
const message = (topic, message) => {
    console.log('Topic:', topic);
    console.log('Message:', message.toString());
};

subscriber
    .on('connect', connect);
    .on('reconnect', reconnect);
    .on('close', close);
    .on('message', message);
