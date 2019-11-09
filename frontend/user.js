class User {

    constructor(username, rating) {
        this.username = username 
        this.rating = rating 
    }

    submitUser() {
        fetch(USERS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
               'user_id': this.id, 'username': input.value   
            })
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                Movie.generateMovies()
            })
        })
        
    }

    
}

