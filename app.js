// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
//
// const app = express();
// const port = process.env.PORT || 3000;
//
// // MySQL Database Connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'library',
// });
//
//
// db.connect((err) => {
//     if (err) {
//         console.error('Database connection error: ' + err.stack);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });
//
// // Middleware
// app.use(bodyParser.json());
//
// // Define your API endpoints here (GET, POST, PUT)
//
// // Example GET endpoint for books
// app.get('/books', (req, res) => {
//     db.query('SELECT * FROM books', (err, results) => {
//         if (err) throw err;
//         res.json(results);
//     });
// });
//
// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database'); // Import the database configuration
const app = express();

// Enable CORS for all routes or specify allowed origins
app.use(cors());

// Configure middleware
app.use(bodyParser.json());

// Import and use your routes
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
