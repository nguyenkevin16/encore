class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render json: 'Create Success', status: 200
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    @comment = comment
    comment.destroy
    render json: 'Delete Success', status: 200
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :track_id)
  end
end
