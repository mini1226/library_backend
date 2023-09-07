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
            if (bookId) {
                // Author was successfully created
                    res.status(201).json({ message: 'Book created successfully', id: bookId });
            } else {
                // Failed to create author (e.g., due to validation errors or database issues)
                res.status(400).json({ error: 'Failed to create book' });
            }
        });
    }



    static updateBook(req, res) {
        const bookId = req.params.id;
        const bookData = req.body;

        Book.updateBook(bookId, bookData, (updatedBook) => {
            if (updatedBook) {
                // Book was successfully updated
                res.status(201).json({ message: 'Book updated successfully', id: bookId });
            } else {
                // Failed to create book (e.g., due to validation errors or database issues)
                res.status(400).json({ error: 'Failed to update book' });
            }
        });
    }






}

module.exports = BookController;
