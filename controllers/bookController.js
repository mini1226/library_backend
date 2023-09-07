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


    static getBookById(req, res) {
        const bookId = req.params.id;

        Book.getBookById(bookId, (book) => {
            if (!book) {
                // Book not found
                return res.status(404).json({ error: 'Book not found' });
            }

            res.json(book);
        });
    }



    static createBook(req, res) {
        const bookData = req.body;

        Book.createBook(bookData, (bookId) => {
            res.status(201).json({ id: bookId });
        });
    }






}

module.exports = BookController;
