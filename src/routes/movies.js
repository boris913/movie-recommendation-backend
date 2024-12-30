const express = require('express');
const router = express.Router();
const { getAllMovies, getMovieById, createMovie, searchMovies } = require('../controllers/movieController');

// Route pour récupérer tous les films
router.get('/', getAllMovies);

// Route pour récupérer un film par ID
router.get('/:id', getMovieById);

// Route pour ajouter un nouveau film
router.post('/', createMovie);

// Route pour rechercher des films par titre
router.get('/search', searchMovies);

module.exports = router;