class AnswersController < ApplicationController

    def new 
        answer = Answer.new
    end 

    def create 
        answer = Answer.new()
        render json: AnswerSerializer.new(answer)
    end
    
end
