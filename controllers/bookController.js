// controllers/bookController.js
const Book = require('../models/bookModel');

class BookController {


    static getAllBooks(req, res) {
        Book.getAll((books) => {
            res.json(books);
        });
    }


    static getAllBooksPaginated(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10; // You can adjust the default limit as needed

        Book.getAllPaginated(page, limit, (books) => {
            res.json(books);
        });
    }







}

module.exports = BookController;
