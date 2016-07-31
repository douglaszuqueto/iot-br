const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = require('../config/jwt').secret;

module.exports = {

    /**
     * All Users
     * @param cb
     */
    all: (cb) => {
        User.find({}, (err, users) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                'data': {users}
            };

            return cb(data);

        });

    },
    /**
     * Get User by Id
     * @param id
     * @param cb
     */
    get: (id, cb) => {

        User.findById(id, (err, user) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                'data': {user}
            };

            return cb(data);

        });
    },
    /**
     * Create a new User
     * @param data
     * @param cb
     */
    create: (data, cb) => {
        let user = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        User.create(user, (err, user) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            data = {
                'data': {user}
            };

            return cb(data);
        });
    },
    /**
     * Update User by Id
     * @param id
     * @param data
     * @param cb
     */
    update: (id, data, cb) => {
        User.update({'_id': id}, {$set: data}, (err) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            User.findById(id, (err, user) => {
                if (err) {
                    data = {
                        error: true,
                        error_message: err
                    };
                }

                data = {
                    'data': {user}
                };

                return cb(data);
            });

            return true;

        });
    },
    /**
     * Remove User
     * @param id
     * @param cb
     */
    remove: (id, cb) => {
        User.findByIdAndRemove(id, (err) => {

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            data = {
                status: true
            };

            return cb(data);

        });
    },
    /**
     * User Login
     * @param data
     * @param cb
     */
    login: (data, cb) => {
        let userData = {
            email: data.email,
            password: data.password
        };

        User.findOne({email: userData.email}, (err, user) => {

            if (err) throw err;

            // Check user exists
            if (!user) {
                return cb({
                    success: false,
                    message: 'Failed to authenticate user.'
                });
            }

            // check if password matches
            if (user.password != userData.password) {
                return cb({
                    success: false,
                    message: 'Failed to authenticate user.'
                });
            }

            let token = jwt.sign(user, secret, {
                expiresIn: '60m'
            });

            return cb({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });

        });
    }
};
