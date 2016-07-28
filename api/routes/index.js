module.exports = (app) => {

    /**
     * Index
     */
    app.get('/', (req, res) => res.json('Hello'));
};

