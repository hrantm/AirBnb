class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render :index
    else
      render json: ["Missing Body / Rating"], status: 401
    end
  end

  def update
    @review = Review.find(params[:id])
  
  end

  def delete
    @review = Review.find(params[:id])
    @reivew.destroy
    render :index
  end

  def index

  end

  private

  def review_params
    params.require(:review).permit(:author_id, :office_id, :rating, :body)
  end
end
