// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

// Define book routes
router.get('/', BookController.getAllBooks);
router.get('/paginated', BookController.getAllBooksPaginate);
router.get('/:id', BookController.getBookById);




// Add other book routes as needed

module.exports = router;
