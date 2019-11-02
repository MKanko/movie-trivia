class QuizzesController < ApplicationController

    def index
        quizzes = Quiz.all
        options = {
            include: [:questions]
        }
        render json: QuizSerializer.new(quizzes, options)
    end

    def new
        quiz = Quiz.new
    end

    def create
        quiz = Quiz.new(quiz_params)
        options = {
            include: [:question, :movie, :result]
        }
        render json: QuizSerializer.new(quiz, options)
    end

    def show 
        quiz = Quiz.find_by(id: params[:quiz_id])
        options = {
            include: [:question, :movie, :result]
        }
        render json: QuizSerializer.new(quiz, options)
    end

    private

    def quiz_params
        params.require(:quiz).permit(:title)
    end
    
end
