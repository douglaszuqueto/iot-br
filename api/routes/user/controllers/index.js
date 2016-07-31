const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
