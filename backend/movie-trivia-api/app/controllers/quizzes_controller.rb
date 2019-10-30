class QuizzesController < ApplicationController

    def index
        quizzes = Quiz.all
    end

    def new
        quiz = Quiz.new
    end

    def create
        quiz = Quiz.new(quiz_params)
    end

    def show 
        quiz = Quiz.find_by(:id params[:quiz_id])
    end

    private

    def quiz_params
        params.require(:quiz).permit(:movie_title, :questions, :time_limit)
    end
    
end
