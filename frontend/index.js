const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/movies`
const QUIZZES_URL = `${BASE_URL}/quizzes`
const RESULTS_URL = `${BASE_URL}/results`

const main = document.getElementsByTagName('main')[0];
const container = document.getElementById('container');

document.addEventListener('DOMContentLoaded', function () {
    Movie.generateMovies();
})

