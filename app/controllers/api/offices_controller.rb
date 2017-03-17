class Api::OfficesController < ApplicationController
  # def create
  #   @office = Office.new(office_params)
  #   if @office.save
  #     render 'api/offices/index'
  #   else
  #     render json: @office.errors.full_messages, status: 422
  #   end
  # end

  def index
    if params[:office]
      @offices = Office.all.sample(params[:office][:show_amount].to_i)
    else
      @offices = Office.all
    end
  end

  def show
    @office = Office.find(params[:id])
  end

  def search
    @offices = Office.where('location LIKE ?', params[:office][:search_params])
    render :index
  end

  private

  def office_params
    params.require(:office).permit(:show_amount, :search_params)
  end
end
