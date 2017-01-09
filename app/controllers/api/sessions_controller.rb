class Api::SessionsController < ApplicationController
  def create
  @user = User.find_by_credentials(session_params[:username], session_params[:password])

    if @user
      login(@user)
      render :show
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}, status: 200
    else
      render json: ['Not logged in.'], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
