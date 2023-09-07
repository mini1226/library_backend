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


    static createAuthor(req, res) {
        const authorData = req.body;

        Author.createAuthor(authorData, (authorId) => {
            if (authorId) {
                // Author was successfully created
                res.status(201).json({ message: 'Author created successfully', id: authorId });
            } else {
                // Failed to create author (e.g., due to validation errors or database issues)
                res.status(400).json({ error: 'Failed to create author' });
            }
        });
    }


    static updateAuthor(req, res) {
        const authorId = req.params.id;
        const authorData = req.body;

        Author.updateAuthor(authorId, authorData, (updatedAuthor) => {
            if (updatedAuthor) {
                // Author was successfully updated
                res.status(201).json({ message: 'Author updated successfully', id: authorId });
            } else {
                // Failed to create author (e.g., due to validation errors or database issues)
                res.status(400).json({ error: 'Failed to update author' });
            }
        });
    }


}

module.exports = AuthorController;
