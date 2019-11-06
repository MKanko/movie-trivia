class AnswersController < ApplicationController

    def new 
        answer = Answer.new
    end 

    def create 
        answer = Answer.new(answer_params)
        render json: AnswerSerializer.new(answer)
    end
    
    private

    def answer_params
        params.require(:answer).permit(:question, :selected_answer, :correct_answer, :answer_context)
    end
end
