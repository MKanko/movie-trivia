class Quiz {

    constructor(title, id) {
        this.title = title;
        this.id = id;
    }

    static generateQuiz = () => {
        fetch(`${MOVIES_URL}/${event.target.dataset.dataQuizId}`)
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

}