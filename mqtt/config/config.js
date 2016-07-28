module.exports = {
    broker: {
        port: 1883
    },
    publisher: {
        uri: 'mqtt://localhost',
        options: {
            clientId: 'nodejs-publisher'
        }
    },
    subscriber: {
        uri: 'mqtt://localhost',
        options: {
            clientId: 'nodejs-subscriber'
        }
    }
};