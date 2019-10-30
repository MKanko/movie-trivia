class ResultsController < ApplicationController

    def new
        result = Result.new
    end 

    def create
        result = Result.new(result_params)
    end 

    def show
        result = Result.find_by(:id params[:result_id])
    end 

    private

    def result_params
        params.require(:result).permit(:movie_title, :score, :time)
    end
end
