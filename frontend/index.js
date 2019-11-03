const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/movies`
const QUIZZES_URL = `${BASE_URL}/quizzes`


const main = document.getElementsByTagName('main')[0];

document.addEventListener('DOMContentLoaded', function () {
    Movie.generateMovies();
})

