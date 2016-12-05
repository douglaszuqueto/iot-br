const mosca = require('mosca');
const config = require('./config/config');

const broker = new mosca.Server(config.broker.port);

/**
 * Events
 */
const clientConnected = (client) => console.log('New Client is connected:');
const clientDisconnected = (client) => console.log('Client is disconnected:');
const published = (packet, client) => {
    console.log('Id:', packet.messageId);
    console.log('Topic:', packet.topic);
    console.log('Message:', packet.payload.toString());
    console.log('QoS:', packet.qos);
}
const ready = () => console.log('Broker is Running');

broker
    .on('clientConnected', clientConnected);
    .on('clientDisconnected', clientDisconnected);
    .on('published', published);
    .on('ready', ready);
