# Movie Recommendation Backend

Ce projet est une API backend pour une application de recommandation de films. Il utilise Node.js, Express, et MongoDB pour gérer les films et effectuer des recherches.

## Prérequis

- Node.js
- MongoDB
- npm (ou yarn)

## Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votre-utilisateur/movie-recommendation-backend.git
   cd movie-recommendation-backend

2. Installez les dépendances :
    npm install

3. Créez un fichier .env à la racine du projet et ajoutez votre URI MongoDB :
    MONGO_URI=your_mongodb_uri

Démarrage du Serveur
Pour démarrer le serveur, exécutez :
    npm start

Le serveur sera accessible à l'adresse http://localhost:5000.

Seed de la Base de Données
Pour ajouter des films de démonstration à la base de données, exécutez le script de seed :

    node src/seedMovies.js

Endpoints de l'API

Récupérer tous les films

    URL : /api/movies
    Méthode : GET
    Réponse : Liste de tous les films
    Récupérer un film par ID
    URL : /api/movies/:id
    Méthode : GET
    Paramètres : id - ID du film
    Réponse : Détails du film

Ajouter un nouveau film

    URL : /api/movies
    Méthode : POST
    Corps : JSON contenant les détails du film
    Réponse : Film ajouté

Rechercher des films par titre

    URL : /api/movies/search
    Méthode : GET
    Paramètres : query - Titre du film à rechercher
    Réponse : Liste des films correspondant à la recherche

Exemple de Requête

    Requête de Recherche avec cURL
    curl -X GET "http://localhost:5000/api/movies/search?query=inception"

Structure du Projet

    movie-recommendation-backend/
    ├── src/
    │   ├── controllers/
    │   │   └── movieController.js
    │   ├── models/
    │   │   └── Movie.js
    │   ├── routes/
    │   │   └── movies.js
    │   ├── seedMovies.js
    │   └── index.js
    ├── .env
    ├── package.json
    └── README.md

Dépendances
    express
    mongoose
    dotenv
    cors
    Auteur
    Votre Nom
    Licence
    Ce projet est sous licence MIT.

