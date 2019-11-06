class AnswersController < ApplicationController

    def new 
        answer = Answer.new
    end 

    def create 
        answer = Answer.new(answer_params)
        render json: AnswerSerializer.new(answer)
    end 
end
