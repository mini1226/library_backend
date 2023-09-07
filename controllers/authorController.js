// controllers/authorController.js
const Author = require('../models/authorModel');

class AuthorController {
    static getAllAuthors(req, res) {
        Author.getAll((authors) => {
            res.json(authors);
        });
    }



    // Add other controller methods as needed
}

module.exports = AuthorController;
