class Result {

    constructor(title, point_value, score) {
        this.title = title
        this.point_value = point_value 
        this.score = score  
    }

    static generateResult(json) {
        const result = new Result(json.data.attributes.title, json.data.attributes.point_value, 
            json.data.attributes.score, json.data.id)
        const ansArr = json.included.map(function (element) {
            return new Answer(element.attributes.question_number, element.attributes.question, element.attributes.selected_answer, 
                element.attributes.correct_answer, element.attributes.answer_context)
        })
        result.renderResult(ansArr)
        
    }
 
    renderResult(ansArr) {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')

        // extract into helper.js
        const navCard = document.querySelector('#nav-card')
        const quizCard = document.querySelector('#quiz-card')
        const btn = document.createElement('button')
        const nch4 = document.createElement('h4')
        nch4.innerText = 'Take Another Quiz'
        btn.innerText = 'Movies'
        navCard.appendChild(nch4)
        navCard.appendChild(btn)

        btn.addEventListener('click', function () {           
            quizCard.style.display = 'none'
            //qch4.remove()  // all three of these lines can be refactored in helper method that resets quizCard
            qch5.remove() 
            Movie.generateMovies()
        })

        const qch5 = document.createElement('h5')
        qch5.innerText = `Your Score: ${this.score} points` 

        quizCard.appendChild(qch5)

        div.classList.add('result')
        div.dataset.dataId = this.id
        h4.innerText = this.title    
        div.appendChild(h4)
        container.innerText = ''
        container.appendChild(div)
        window.scrollTo(0,0)
        
        for (const element of ansArr) {
            div.appendChild(element.generateAnswer())
        }
    }
}



