const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {

    name: {
        type: Schema.Types.String
    },
    email: {
        type: Schema.Types.String
    },
    password: {
        type: Schema.Types.String
    }

};

const userSchema = new Schema(_schema);

module.exports = mongoose.model('User', userSchema);
