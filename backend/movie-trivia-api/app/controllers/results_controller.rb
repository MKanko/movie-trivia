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

    # find quiz object by id 
    # build a result using the quiz id and quiz title
    # loop thru selAns and build and answer object for each one and each answer is related to the result (use result build answer)
    # figure out quiz score based off of number of correct answers (compare sel anser with correct answer)
    # at some point update stat object 

    def create
        binding.pry
        result = Result.new()
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

    
end
