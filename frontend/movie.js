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
        container.appendChild(div);
              
        const a = document.createElement('a');
        a.innerText = this.title;
        a.dataset.dataMovieId = this.id;
        a.href = '#';
       
        div.appendChild(a);
        a.addEventListener('click', function () {
            Movie.generateMovie()
        } ) 
    }

    static generateMovie = () => {    
        fetch(`${MOVIES_URL}/${event.target.dataset.dataMovieId}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            const movie = new Movie(json.data.attributes.title, json.data.id)           
            const quizArr = json.included.map(function (element) {
               return new Quiz(element.attributes.title, element.id)
            })     
            movie.renderMovie(quizArr)           
        })
    }

    

    
}

