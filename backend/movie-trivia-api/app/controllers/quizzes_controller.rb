class QuizzesController < ApplicationController

    def index
        quizzes = Quiz.all
        options = {
            include: [:questions]
        }
        render json: QuizSerializer.new(quizzes, options)
    end

    def show 
        quiz = Quiz.find_by(id: params[:quiz_id])
        options = {
            include: [:questions]
        }
        render json: QuizSerializer.new(quizzes, options)
    end
    
end
