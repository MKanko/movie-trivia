class Stat {

    constructor(movie_history, quiz_history, rating, point_total) {
        this.movie_history = movie_history 
        this.quiz_history = quiz_history 
        this. rating = rating 
        this.point_total = point_total 
    }

    static renderStat = () => {
        const statCard = document.querySelector('#stat-card')
        const h4 = document.createElement('h4')
        const h5 = document.createElement('h5')

        h4.innerText = 'Your Game Stats'
        h5.innerText = this.point_total
        statCard.dataset.userId = this.user_id

        statCard.appendChild(h4)
        statCard.appendChild(h5)
    }

     
}