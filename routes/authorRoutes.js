// routes/authorRoutes.js
const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/authorController');

// Define author routes
router.get('/', AuthorController.getAllAuthors);
router.get('/:id', AuthorController.getAuthorById);
router.post('/', AuthorController.createAuthor);
router.put('/:id', AuthorController.updateAuthor);

// Add other author routes as needed

module.exports = router;
