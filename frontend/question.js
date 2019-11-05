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

    generateQuestion() {
        const div = document.createElement('div')
        const p = document.createElement('p')

        p.innerText = `${this.question_number}.  ${this.question}`
        div.appendChild(p)

        
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

















     
           
