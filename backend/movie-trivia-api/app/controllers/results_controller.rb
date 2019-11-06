class ResultsController < ApplicationController

    def index 
        results = Result.all
        options = {
            include: [:answers]
        }
        render json: ResultSerializer.new(results, options)
    end 

    def new
        result = Result.new
    end 

    def create
        result = Result.new(result_params)
        options = {
            include: [:answers]
        }
        render json: ResultSerializer.new(result, options) 
    end

    def show 
        result = Result.find(params[:id])
        options = {
            include: [:answers]
        }
        render json: ResultSerializer.new(result, options)
    end

    private

    def result_params 
        params.require(:result).permit(:title, :point_value, :score)
    end 

    
end
