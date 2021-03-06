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
    if bounds
      @offices = Office.in_bounds(bounds)
    elsif params[:office]
      @offices = Office.all.sample(params[:office][:show_amount].to_i)
    else
      @offices = Office.all
    end
  end

  def show
    @office = Office.find(params[:id])
  end

  def search
    if params[:search_params][:location] == ''
      @offices = Office.all.where('guest_limit >= ?', params[:search_params][:guests])
    else
      @offices = Office.where('location LIKE ? AND guest_limit >= ?',
       "%#{params[:search_params][:location].split(' ').map(&:downcase).map(&:capitalize).join(' ')}%",
       params[:search_params][:guests].to_i)
    end
    render :index
  end

  # def search
  # Add searching for dates
  #   if params[:search_params][:location] == ''
  #     @offices = Office.all.where('guest_limit >= ?', params[:search_params][:guests])
  #   else
  #     @offices = Office.where('location LIKE ? AND guest_limit >= ?',
  #      "%#{params[:search_params][:location].split(' ').map(&:downcase).map(&:capitalize).join(' ')}%",
  #      params[:search_params][:guests].to_i)
  #   end
  #   render :index
  # end

  private

  def office_params
    params.require(:office).permit(:show_amount)
  end

  def bounds
   params[:bounds]
  end

end
