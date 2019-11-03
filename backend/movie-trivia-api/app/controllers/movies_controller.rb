class MoviesController < ApplicationController

    def index
        movie = Movie.all
        options = {
            include: [:quizzes]
        }
        render json: MovieSerializer.new(movie, options) 
    end 

    def show 
        movie = Movie.find(params[:id])
        options = {
            include: [:quizzes]
        }
        render json: MovieSerializer.new(movie, options)
    end

end
