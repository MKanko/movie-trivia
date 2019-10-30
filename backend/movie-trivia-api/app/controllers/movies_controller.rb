class MoviesController < ApplicationController

    def index
        movie = Movie.all
    end 

    def new
        movie = Movie.new
    end

    def create
        movie = Movie.new(movie_params)
    end

    def show
        movie = Movie.find_by(:id params[:movie_id])
    end

    private

    def movie_params
        params.require(:movie).permit(:title)
end
