class UsersController < ApplicationController

    def new
        user = User.new
    end 

    def create
        user = User.find_by(id: params[:user_id]) 
    end 

    def show 
        user = User.find_by(id: params[:user_id])
    end
    
end
