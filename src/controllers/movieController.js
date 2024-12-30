const Movie = require('../models/Movie');

// Fonction pour récupérer tous les films
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Fonction pour récupérer un film par ID
const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Fonction pour créer un nouveau film
const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(400).json({ message: 'Error creating movie', error });
  }
};

const searchMovies = async (req, res) => {
  try {
    const query = req.query.query;
    console.log('Search query:', query); // Log de la requête de recherche
    const movies = await Movie.find({ title: { $regex: query, $options: 'i' } });
    console.log('Movies found:', movies); // Log des films trouvés
    res.json(movies);
  } catch (error) {
    console.error('Error during search:', error); // Log de l'erreur
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  searchMovies,
};