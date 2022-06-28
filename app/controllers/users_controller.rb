class UsersController < ApplicationController

    def index 
        user = User.all
        render json: user
    end

    def create
        newuser = User.create(user_params)
        render json: newuser, status: :created
    end
    
    private 

    def user_params
        params.permit(:client, :poc, :email, :role, :urgency, :quantity, :skills_needed)
    end

end
