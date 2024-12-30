const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Movie = require('./models/Movie');

dotenv.config(); // Charger les variables d'environnement

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Liste des films à ajouter
const movies = [
  { title: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology...", release_date: new Date("2010-07-16") },
  { title: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality...", release_date: new Date("1999-03-31") },
  { title: "Interstellar", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival...", release_date: new Date("2014-11-07") },
  { title: "The Dark Knight", description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham...", release_date: new Date("2008-07-18") },
  { title: "Fight Club", description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more...", release_date: new Date("1999-10-15") },
  { title: "Pulp Fiction", description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption...", release_date: new Date("1994-10-14") },
  { title: "Forrest Gump", description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75...", release_date: new Date("1994-07-06") },
  { title: "The Shawshank Redemption", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency...", release_date: new Date("1994-09-23") },
  { title: "The Godfather", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son...", release_date: new Date("1972-03-24") },
  { title: "The Lord of the Rings: The Fellowship of the Ring", description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron...", release_date: new Date("2001-12-19") },
  { title: "Star Wars: Episode IV - A New Hope", description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader...", release_date: new Date("1977-05-25") },
  { title: "The Avengers", description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity...", release_date: new Date("2012-05-04") },
  { title: "Jurassic Park", description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok...", release_date: new Date("1993-06-11") },
  { title: "Titanic", description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic...", release_date: new Date("1997-12-19") },
  { title: "Avatar", description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home...", release_date: new Date("2009-12-18") },
  { title: "Gladiator", description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery...", release_date: new Date("2000-05-05") },
  { title: "Saving Private Ryan", description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action...", release_date: new Date("1998-07-24") },
  { title: "Braveheart", description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England...", release_date: new Date("1995-05-24") },
  { title: "The Lion King", description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself...", release_date: new Date("1994-06-24") },
  { title: "The Green Mile", description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift...", release_date: new Date("1999-12-10") },
];

// Fonction pour ajouter les films à la base de données
const seedMovies = async () => {
  try {
    await Movie.insertMany(movies);
    console.log('Movies added to the database');
    mongoose.connection.close(); // Fermer la connexion à la base de données
  } catch (error) {
    console.error('Error adding movies to the database', error);
    mongoose.connection.close(); // Fermer la connexion à la base de données même en cas d'erreur
  }
};

seedMovies();