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
            let stat 
            json.included.forEach(function (item) {
                if (item.type === 'stat') {
                    const statData = item.attributes  
                    stat = new Stat(statData.movie_history, statData.quiz_history, statData.rating, 
                        statData.point_total, item.id) 
                }
            })
            user.renderUser()
            stat.renderStat()
            Movie.generateMovies()
        })       
    }

    renderUser() {
        const userCard = document.querySelector('#user-card')
        const h3 = document.createElement('h3')
        const h5 = document.createElement('h5')

        h3.innerText = this.username
        h3.style.color = 'black'
        h5.innerText = this.rating
        userCard.dataset.userId = this.id
        userCard.style.display = ''

        userCard.appendChild(h3)
        userCard.appendChild(h5)
    }   
}

