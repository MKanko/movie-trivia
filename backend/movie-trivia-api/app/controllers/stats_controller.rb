class StatsController < ApplicationController

    def new
        stat = Stat.new
    end

    def create
        stat = Stat.new(stat_params)
    end

    def show 
        stat = Stat.find_by(:id params[:stat_id])
    end

    def edit
        stat = Stat.find(params[:id])
    end

    def update
        stat = Stat.find(params[:id])
        stat.update(stat_params)
    end

    private

    def stat_params
        params.require(:stat).permit(:movie_history, :quiz_history, :rating, :point_total)
    end
end
