const jwt = require('jsonwebtoken');
const secret = require('../jwt').secret;

module.exports = (req, res, next) => {
    // check header or url parameters or post parameters for token
    let token = req.body.token || req.query.token || req.headers['authorization'];

    if (!token) {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
    // verifies secret and checks exp
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(403).send({
                success: false,
                message: 'Failed to authenticate token.'
            });
        } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;
            next();
        }
    });
};
