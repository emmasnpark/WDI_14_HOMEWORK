class CommentsController < ApplicationController
  def new
  end

  def create
    @comment = Comment.new
    @comment.body = params[:body]
    @comment.user_id = session[:user_id]
    @comment.project_id = params[:project_id]
     if @comment.save
      redirect_to "/projects/#{@comment.project_id}"
     else
      render 'pages/home'
     end
  end

  def destroy
    @comment = Comment.find(params[:comment_id])
    @comment.destroy
    redirect_to "/projects/#{@comment.project_id}"
  end


end
