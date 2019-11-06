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
        result = Result.new(user_params)
        options = {
            include: [:answers]
        }
        render json: ResultSerializer.new(result, options) 
    end
    
end
