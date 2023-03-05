class UsersController < ApplicationController

    # signup
    def create
        user = User.create(user_params)
        #logs the user in 
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        users = User.all
        render json: users
    end

    # me
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end
    

    private

    def user_params
        params.require(:user).permit(
            :email, 
            :username, 
            :first_name, 
            :last_name, 
            :phone_number,
            :address, 
            :city,
            :state,
            :zipcode, 
            :password, 
            :password_confirmation
        )
    end
end
