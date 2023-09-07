// controllers/bookController.js
const Book = require('../models/bookModel');

class BookController {


    static getAllBooks(req, res) {
        Book.getAll((books) => {
            res.json(books);
        });
    }








}

module.exports = BookController;
