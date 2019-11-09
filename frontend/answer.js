class Answer {
    
    constructor(question_number, question, selected_answer, correct_answer, answer_context) { 
        this.question_number = question_number 
        this.question = question
        this.selected_answer = selected_answer 
        this.correct_answer = correct_answer
        this.answer_context = answer_context 
    }

    generateAnswer = () => {
        const div = document.createElement('div')
        const ul = document.createElement('ul')

        const p1 = document.createElement('p')
        p1.innerText = `${this.question_number}.  ${this.question}`  
        div.appendChild(p1)
        

        const li1 = document.createElement('li')
        li1.innerText = `Your answer was ${this.selected_answer}.`
            if (this.selected_answer === this.correct_answer) {
                li1.style.color = 'green' 
            } else {
                li1.style.color = 'red' 
            }
        ul.appendChild(li1)

        const li2 = document.createElement('li')
        li2.innerText = `The correct answer is ${this.correct_answer}.`
        ul.appendChild(li2)

        const p2 = document.createElement('p')
        p2.innerText = this.answer_context
        
        div.appendChild(ul)
        div.appendChild(p2)

        return div 
    }
}

