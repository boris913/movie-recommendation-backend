const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Importer le middleware cors

dotenv.config(); // Charger les variables d'environnement

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware pour permettre CORS
app.use(cors());

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Importer les routes
const movieRoutes = require('./routes/movies');

// Utiliser les routes
app.use('/api/movies', movieRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});