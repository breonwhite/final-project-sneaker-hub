class SessionsController < ApplicationController

    # login
    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
          session[:user_id] = user.id
          render json: { user: user }
        else
          render json: { error: 'Invalid email or password' }, status: :unprocessable_entity
        end
    end

    # logout
    def destroy
        session.clear
        render json: { message: 'Successfully logged out' }
    end

end
