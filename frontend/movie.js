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
                container.innerHTML = ''
                
                for (const element of json.data) {
                    const movie = new Movie(element.attributes.title, element.id)
                    movie.renderMovieList()                  
                }
            })
    }

    renderMovieList() {
        const div = document.createElement('div');
        const a = document.createElement('a');

        div.classList.add('movieList');
        div.dataset.dataId = this.id;       
        a.innerText = this.title;
        a.dataset.dataMovieId = this.id;
        a.href = '#';
       
        div.appendChild(a);
        container.appendChild(div);

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

    renderMovie(quizArr) { 
        const div = document.createElement('div');
        const h4 = document.createElement('h4')
        div.classList.add('movie');
        div.dataset.dataId = this.id;
        h4.innerText = this.title 
        div.appendChild(h4)
        container.innerHTML = '';
        container.appendChild(div);
        
        for (const element of quizArr) {
            const p = document.createElement('p')
            const a = document.createElement('a')
            a.innerText += element.title 
            a.dataset.dataQuizId = element.id
            a.href = '#'
            p.appendChild(a)
            div.appendChild(p)

            a.addEventListener('click', function () {
                Quiz.generateQuiz()
            })
        }                     
               
    }
    
}

