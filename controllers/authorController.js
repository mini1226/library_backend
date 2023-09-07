// controllers/authorController.js
const Author = require('../models/authorModel');

class AuthorController {


    static getAllAuthors(req, res) {
        Author.getAll((authors) => {
            res.json(authors);
        });
    }


    static getAuthorById(req, res) {
        const authorId = req.params.id;

        Author.getAuthorById(authorId, (author) => {
            if (!author) {
                // Author not found
                return res.status(404).json({ error: 'Author not found' });
            }

            res.json(author);
        });
    }


}

module.exports = AuthorController;
