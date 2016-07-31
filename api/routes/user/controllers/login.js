const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    Repository.login(req.body, (data) => {
        if (!data.success) {
            return res.status(401).send(data);
        }

        return res.json(data);
    });

};
