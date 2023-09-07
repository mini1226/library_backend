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


}

module.exports = Book;
