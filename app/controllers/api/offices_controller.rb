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

  private

  def office_params
    params.require(:office).permit(:owner_id, :location, :lat, :lng, :price,  :image_url, :about_this,
    :guest_limit, :desks, :show_amount)
  end
end
