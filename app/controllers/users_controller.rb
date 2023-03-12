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

    # me
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    def update
        user = User.find(params[:id])
        if current_user == user
          if user.update(update_params)
            render json: user, status: :ok
          else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
        else
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
    end
    
    

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

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

    def update_params
        params.require(:user).permit(:username, :first_name, :last_name, :phone_number, :address, :city, :zipcode, :state)
    end
end
