class UsersController < ApplicationController

    def new
        user = User.new
    end 

    def create
        if !(user = User.find_by(username: params[:username]))
            user = User.create(username: params[:username])
            stat = Stat.create(movie_history: '', quiz_history: '', rating: '', point_total: 0, user_id: user.id) 
        end 
        options = {
            include: [:stat]
        }
        render json: UserSerializer.new(user, options) 
    end 

    def show 
        user = User.find_by(id: params[:user_id])
        options = {
            include: [:result, :stat]
        }
        render json: UserSerializer.new(user, options)
    end 

end
