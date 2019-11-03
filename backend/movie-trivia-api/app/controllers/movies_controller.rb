class MoviesController < ApplicationController

    def index
        movie = Movie.all
        options = {
            include: [:quizzes]
        }
        render json: MovieSerializer.new(movie, options) 
    end 

    def show
        movie = Movie.find_by(id: params[:movie_id])
        render json: MovieSerializer.new(movie)
    end

end
