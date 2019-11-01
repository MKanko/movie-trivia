class UsersController < ApplicationController

    def new
        user = User.new
    end 

    def create
        user = User.new(user_params)
        render json: UserSerializer.new(user) 
    end 

    def show 
        user = User.find_by(id: params[:user_id])
        options = {
            include: [:quiz, :stat]
        }
        render json: UserSerializer.new(user, options)
    end

    private 

    def user_params
        params.require(:user).permit(:username, :rating)
    end 

end
