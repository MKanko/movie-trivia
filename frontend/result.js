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
            return new Answer(element.attributes.question, element.attributes.selected_answer, 
                element.attributes.correct_answer, element.attributes.answer_context)
        })
        result.renderResult(ansArr)
        
    }
 
    renderResult(ansArr) {
        const div = document.createElement('div')
        const h4 = document.createElement('h4')

        div.classList.add('result')
        div.dataset.dataId = this.id
        h4.innerText = this.title
        div.appendChild(h4)
        container.innerText = ''
        container.appendChild(div)
        
        for (const element of ansArr) {
            div.appendChild(element.generateAnswer())
        }
    }
}



