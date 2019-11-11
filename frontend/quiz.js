class Quiz {

    constructor(title, id) {
        this.title = title
        this.id = id
    }

    static generateQuiz = () => {
        fetch(`${QUIZZES_URL}/${event.target.dataset.dataQuizId}`)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                const quiz = new Quiz(json.data.attributes.title, json.data.id)           
                const questionArr = json.included.map(function (element) {
                return new Question(element.attributes.question_number, 
                    element.attributes.question, element.attributes.answer_option_a,  
                    element.attributes.answer_option_b, element.attributes.answer_option_c,
                    element.attributes.answer_option_d, element.attributes.correct_answer,
                    element.attributes.answer_context, element.id)
                })    
                quiz.renderQuiz(questionArr)           
            })
    }

    renderQuiz(questionArr) {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const btn = document.createElement('button')
        const quizCard = document.querySelector('#quiz-card')
       
        div.classList.add('quiz')
        div.dataset.dataId = this.id
        h4.innerText = this.title
        btn.dataset.dataId = this.id
        btn.innerText = 'Submit Answers'
        container.innerHTML = ''
      
        div.appendChild(h4)

        for (const element of questionArr) {          
            div.appendChild(element.generateQuestion())            
        }
        container.appendChild(div)
        div.appendChild(btn)

        quizCard.style.display = '' 

        btn.addEventListener('click', () => {
            this.submitQuizAnswers()
        })
    }

    submitQuizAnswers() {
        const selAns = {}
        const radios = document.querySelectorAll('input[type=radio]') 
        const userId = document.querySelector('#user-card').dataset.userId 
        
        for(const radio of radios) {
            if (radio.checked) {
                selAns[radio.name] = radio.value 
            }
        }
        fetch(RESULTS_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'  
            },
            body: JSON.stringify({
              'quiz_id': this.id, 'selAnswers': selAns, 'user_id': userId   
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            Result.generateResult(json)
            Stat.updateStat()                       
        })

    }

}




