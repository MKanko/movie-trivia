
const renderCards = (score) => {

    const quizCard = document.querySelector('#quiz-card')
    const navCard = document.querySelector('#nav-card')
    const h5 = document.createElement('h5')
    const h4 = document.createElement('h4')
    const btn = document.createElement('button')

    h5.innerText = `Your score ${score} points`
    h4.innerText = 'Take another quiz'
    btn.innerText = 'Movies'

    quizCard.appendChild(h5)
    navCard.appendChild(h4)
    navCard.appendChild(btn) 

    btn.addEventListener('click', function() {
        quizCard.style.display = 'none'
        h5.remove()
        Movie.generateMovies()
    })
}