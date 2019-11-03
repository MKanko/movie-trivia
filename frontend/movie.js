class Movie {
    constructor(title, id) {
        this.title = title;
        this.id = id;
    }
    
    static generateMovies = () => {
        fetch(MOVIES_URL)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                for (const element of json.data) {
                    const movie = new Movie(element.attributes.title, element.id)
                    movie.renderMovieLink()
                }
            })
    }
}

