// models/bookModel.js
const db = require('../config/database');

class Book {


    static getAll(callback) {
        db.query('SELECT * FROM books', (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }


    static getAllPaginated(page, limit, callback) {
        const offset = (page - 1) * limit;
        const query = `SELECT * FROM books LIMIT ${limit} OFFSET ${offset}`;

        db.query(query, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }


    static getBookById(bookId, callback) {
        const query = `
  SELECT books.id, books.name, books.isbn,
         authors.id AS author_id, authors.first_name, authors.last_name
  FROM books
  INNER JOIN authors ON books.author_id = authors.id
  WHERE books.id = ?`;

        db.query(query, [bookId], (err, results) => {
            if (err) throw err;
            if (results.length === 0) {
                callback(null); // Book not found
            } else {
                callback(results[0]);
            }
        });
    }


    static createBook(bookData, callback) {
        const { name, isbn, author_id } = bookData;
        const query = 'INSERT INTO books (name, isbn, author_id) VALUES (?, ?, ?)';

        db.query(query, [name, isbn, author_id], (err, results) => {
            if (err) throw err;
            callback(results.insertId);
        });
    }


}

module.exports = Book;
