const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongodb.uri);

mongoose.connection.on('error', (err) => {
    console.log("Erro: ", err);
});

mongoose.connection.on('connected', () => {
    console.log("Conectado ao MongoDB");
});

mongoose.connection.on('disconnected', () => {
    console.log("Conectado ao MongoDB");
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Conexão Encerrada');
        process.exit(0);
    });
});

module.exports = mongoose;
