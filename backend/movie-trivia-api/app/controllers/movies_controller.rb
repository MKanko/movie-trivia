class MoviesController < ApplicationController

    def index
        movie = Movie.all
        options = {
            include: [:quizzes, :questions]
        }
        render json: MovieSerializer.new(movie, options) 
    end 

    def new
        movie = Movie.new
    end

    def create
        movie = Movie.new(movie_params)
    end

    def show
        movie = Movie.find_by(id: params[:movie_id])
        render json: MovieSerializer.new(movie)
    end

    private

    def movie_params
        params.require(:movie).permit(:title)
    end
end
