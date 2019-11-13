
const renderCards = (score) => {    
    const quizCard = document.querySelector('#quiz-card')
    const navCard = document.querySelector('#nav-card')
    const h5 = document.createElement('h5')
    const h4 = document.createElement('h4')
    const btn = document.createElement('button')
    const h42 = document.createElement('h4')
    const btn2 = document.createElement('button')

    h5.innerText = `Your score: ${score} points`
    h4.innerText = 'Take another quiz'
    btn.innerText = 'Movies'
    h42.innerText = 'Finished Playing'
    btn2.innerText = 'Sign Out'

    quizCard.appendChild(h5)
    navCard.appendChild(h4)
    navCard.appendChild(btn)
    navCard.appendChild(h42)
    navCard.appendChild(btn2) 

    btn.addEventListener('click', function() {
        quizCard.style.display = 'none'
        h5.remove()
        Movie.generateMovies()
    })

    btn2.addEventListener('click', function () {
        signOut()        
    })

    const signOut = () => {
        container.innerText = ''
        const userCard = document.querySelector('#user-card')
        const statCard = document.querySelector('#stat-card')
        const quizCard = document.querySelector('#quiz-card')
        const navCard = document.querySelector('#nav-card')

        userCard.innerHTML = ''
        statCard.innerHTML = ''
        quizCard.style.display = 'none'
        navCard.innerHTML = ''

        renderUserSignIn()
    }

}