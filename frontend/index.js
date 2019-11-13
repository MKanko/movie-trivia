const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/movies`
const QUIZZES_URL = `${BASE_URL}/quizzes`
const RESULTS_URL = `${BASE_URL}/results`
const USERS_URL = `${BASE_URL}/users`
const STATS_URL = `${BASE_URL}/stats`

const main = document.getElementsByTagName('main')[0]
const container = document.getElementById('container')

document.addEventListener('DOMContentLoaded', function () {    
    renderUserSignIn()
})

renderUserSignIn = () => {        
    const div = document.createElement('div')
    const h4 = document.createElement('h4')
    const input = document.createElement('input')
    const btn = document.createElement('button')
    const p = document.createElement('p')

    div.classList.add('user')
    h4.innerText = 'Sign in with username to play.'
    input.type = 'text'
    input.value = ''
    input.name = 'username'
    btn.innerText = 'Submit'
    p.innerText = 'You must sign in with a username to play.'
    p.style.color = 'red'

    div.appendChild(h4) 
    div.appendChild(input) 
    div.appendChild(btn)    
    container.appendChild(div)

    btn.addEventListener('click', function () {
        if (input.value === '') {
            div.appendChild(p)
        } else {
            User.submitUser()
        }       
    })
}  

