class Result {

    constructor(title, point_value, score) {
        title = this.title
        point_value = this.point_value
        score = this.score 
    }

    generateResult(json) {
        const result = new Result(json.data.attributes.title, json.data.attributes.point_value, 
            json.data.attributes.score, json.data.id)
        const ansArr = json.included.map(function (element) {
            return new Answer(element.attributes.question, element.attributes.selected_answer, 
                element.attributes.correct_answer, element.attributes.answer_context)
        })
        result.renderResult(ansArr)
    }
 
    renderResult() {
        
    }
}



