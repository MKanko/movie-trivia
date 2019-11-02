class UsersController < ApplicationController

    def new
        user = User.new
    end 

    def create
        user = User.new(user_params)
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

    private 

    def user_params
        params.require(:user).permit(:username, :rating)
    end 

end
