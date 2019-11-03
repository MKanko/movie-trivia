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

    renderMovieLink() {
        const div = document.createElement('div');
        div.classList.add('movie');
        div.dataset.dataId = this.id;
        main.appendChild(div);
        
        const p = document.createElement('p');  // this needs to be an anchor tag with onclick event
        p.innerText = this.title;               // event listener when on click invokes displayMovie
        div.appendChild(p);
    }
}

