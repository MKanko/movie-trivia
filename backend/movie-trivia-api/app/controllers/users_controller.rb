class UsersController < ApplicationController

    def create  
        if !(user = User.find_by(username: params[:username]))                  
            user = User.new(username: params[:username])                     
            user.build_stat(movie_history: '', quiz_history: '', rating: '', point_total: 0)         
            options = {
                include: [:stat]
            }
            render json: UserSerializer.new(user, options) 
        else
            redirect_to user        
        end   
    end  
       
    def show 
        user = User.find_by(id: params[:id])
        options = {
            include: [:results, :stat]
        }
        render json: UserSerializer.new(user, options)
    end 

end
