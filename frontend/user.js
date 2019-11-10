class User {

    constructor(username, rating, id) {
        this.username = username 
        this.rating = rating 
        this.id = id 
    }

    static submitUser = () => {
        const input = document.querySelector('input[type=text]')

        fetch(USERS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
               'username': input.value   
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            const user = new User(json.data.attributes.username, json.data.attributes.rating, json.data.id)
            user.renderUser()
            Stat.renderStat()
            Movie.generateMovies()
        })       
    }

    renderUser() {
        const userCard = document.querySelector('#user-card')
        const h3 = document.createElement('h3')
        const h5 = document.createElement('h5')

        h3.innerText = this.username
        h5.innerText = this.rating
        userCard.dataset.userId = this.id

        userCard.appendChild(h3)
        userCard.appendChild(h5)
    }   
}

