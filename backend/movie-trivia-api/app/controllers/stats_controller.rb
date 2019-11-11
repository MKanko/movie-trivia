class StatsController < ApplicationController

    def show 
        stat = Stat.find_by(id: params[:id])

        render json: StatSerializer.new(stat)
    end
    
end
