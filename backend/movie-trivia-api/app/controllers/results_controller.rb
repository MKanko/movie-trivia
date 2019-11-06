class ResultsController < ApplicationController

    def index 
        results = Result.all
        options = {
            include: [:answers]
        }
        render json: ResultSerializer.new(results, options)
    end 
    
end
