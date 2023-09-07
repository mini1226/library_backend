// models/bookModel.js
const db = require('../config/database');

class Book {


    static getAll(callback) {
        db.query('SELECT * FROM books', (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }




}

module.exports = Book;
