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
                    movie.renderMovieList()
                }
            })
    }

    renderMovieList() {
        const div = document.createElement('div');
        div.classList.add('movieList');
        div.dataset.dataId = this.id;
        main.appendChild(div);
        
        const p = document.createElement('p');
        p.innerText = this.title;
        const btn = document.createElement('button');
        btn.innerText = 'Select Movie';
        btn.dataset.dataMovieId = this.id;
        p.appendChild(btn);
        div.appendChild(p);
        btn.addEventListener('click', function () {
            Movie.generateMovie()
        } ) 
    }

    static generateMovie = () => {    
        fetch(`${MOVIES_URL}/${event.target.dataset.dataMovieId}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            movie = new Movie(json.data.attributes.title, json.data.id)
            // TODO: iterate with map thru associated quizzes build a quiz object for each quiz
            // pass new array of quiz objects to renderMovie
            // but first need to create class Quiz  
        })
    }

    
}

