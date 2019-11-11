class Stat {

    constructor(movie_history, quiz_history, rating, point_total, id) {
        this.movie_history = movie_history 
        this.quiz_history = quiz_history 
        this.rating = rating 
        this.point_total = point_total
        this.id = id  
    }

    static updateStat = () => {
        const statCard = document.querySelector('#stat-card')
        const statId = statCard.dataset.statId

        fetch(`${STATS_URL}/${statId}`)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                const statData = json.data.attributes  
                const stat = new Stat(statData.movie_history, statData.quiz_history, statData.rating, 
                    statData.point_total, json.data.id)

                stat.renderStat() 
            })                            
    }

    renderStat() {
        const statCard = document.querySelector('#stat-card')
        const div = document.createElement('div')
        const h5 = document.createElement('h5')

        h5.innerText = `Your total points: ${this.point_total}`
        statCard.dataset.statId = this.id
        statCard.innerHTML = ''

        div.appendChild(h5)
        statCard.appendChild(div)
    }
     
}