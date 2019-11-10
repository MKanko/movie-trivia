class Question {

    constructor(question_number, question, answer_option_a, answer_option_b, 
        answer_option_c, answer_option_d, correct_answer, answer_context) {

            this.question_number = question_number
            this.question = question
            this.answer_option_a = answer_option_a
            this.answer_option_b = answer_option_b
            this.answer_option_c = answer_option_c
            this.answer_option_d = answer_option_d
            this.correct_answer = correct_answer
            this.answer_context = answer_context 
        }

    generateRadioInput(answerOption) {
        const radio = document.createElement('input')
        const div = document.createElement('div')
        const label = document.createElement('label')

        radio.type = 'radio'
        radio.name = `question_${this.question_number}_answer`
        radio.id = `question_${this.question_number}_answer_${answerOption}`
        label.for = `question_${this.question_number}_answer_${answerOption}`

        if (answerOption === 'a') {
            label.innerText = this.answer_option_a
            radio.value = this.answer_option_a
        } else if (answerOption === 'b') {
            label.innerText = this.answer_option_b
            radio.value = this.answer_option_b
        } else if (answerOption === 'c') {
            label.innerText = this.answer_option_c
            radio.value = this.answer_option_c
        } else if (answerOption === 'd') {
            label.innerText = this.answer_option_d
            radio.value = this.answer_option_d
        }
        div.appendChild(radio)
        div.appendChild(label)
        return div 
    }

    generateQuestion() {
        const div = document.createElement('div')
        const p = document.createElement('p')

        div.classList.add('ui', 'green', 'segment')

        p.innerText = `${this.question_number}.  ${this.question}`
        div.appendChild(p)

        if (this.answer_option_a) {
            div.appendChild(this.generateRadioInput('a'))
        }
        if (this.answer_option_b) {
            div.appendChild(this.generateRadioInput('b'))
        }
        if (this.answer_option_c) {
            div.appendChild(this.generateRadioInput('c'))
        }
        if (this.answer_option_d) {
            div.appendChild(this.generateRadioInput('d'))
        }
        return div
    }
        

}

        // const p = document.createElement('p')
        // p.innerText = `${}`
        

    // radioInput = document.createElement('input')
        //radioInput.setAttribute('type', 'radio')
    
    /* <input type="radio" value="value1" name="group1">
    <input type="radio" value="value2" name="group1">
    <input type="radio"                   value="value1"                                name="group1">
    <input type="radio"                   value="value2"                                name="group1"> */
                                    // this is answer_option_a or b pr c...          this is the question number (or id?)

















     
           
