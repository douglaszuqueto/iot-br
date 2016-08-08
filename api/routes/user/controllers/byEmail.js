const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    let email = req.params.email;

    Repository.getByEmail(email, (data) => res.json(data));

};
