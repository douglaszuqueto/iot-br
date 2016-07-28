const mosca = require('mosca');
const config = require('./config/config');

const broker = new mosca.Server(config.broker.port);

/**
 * Events
 */
broker.on('clientConnected', (client) => console.log('New Client is connected:'));

broker.on('clientDisconnected', (client) => console.log('Client is disconnected:'));

broker.on('published', (packet, client) => {
    console.log('Id:', packet.messageId);
    console.log('Topic:', packet.topic);
    console.log('Message:', packet.payload.toString());
    console.log('QoS:', packet.qos);
});

broker.on('ready', () => {
    console.log('Broker is Running');
});