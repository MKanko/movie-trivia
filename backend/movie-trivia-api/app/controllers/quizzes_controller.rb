class QuizzesController < ApplicationController

    # def index
    #     quizzes = Quiz.all
    #     options = {
    #         include: [:questions]
    #     }
    #     render json: QuizSerializer.new(quizzes, options)
    # end

    def show 
        quiz = Quiz.find(params[:id])
        options = {
            include: [:questions]
        }
        render json: QuizSerializer.new(quiz, options)
    end
    
end
