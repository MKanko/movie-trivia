class QuestionsController < ApplicationController

    def index
        questions = Question.all 
        options = {
            include: [:quiz]
        }
        render json: QuestionSerializer.new(question, options)
    end
    
end
