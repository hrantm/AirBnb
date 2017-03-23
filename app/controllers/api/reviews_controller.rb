class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      @reviews = Review.all
      render 'api/reviews/index'
    else
      render json: ["Missing Body / Rating"], status: 401
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      @reviews = Review.all
      render 'api/reviews/index'
    else
      render json: ["Missing Body / Rating"], status: 401
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    @reviews = Review.all
    render 'api/reviews/index'
  end

  def index
    #reviews should just be the reviews for the currentOffice
    @reviews = Review.all
    render 'api/reviews/index'
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :office_id, :rating, :body)
  end
end
