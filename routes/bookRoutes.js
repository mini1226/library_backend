// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

// Define book routes
router.get('/', BookController.getAllBooks);
router.get('/paginated', BookController.getAllBooksPaginated);
router.get('/:id', BookController.getBookById);
router.post('/', BookController.createBook);


// Add other book routes as needed

module.exports = router;
