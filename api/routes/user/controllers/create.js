const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    Repository.create(req.body, (data) => res.json(data));

};
