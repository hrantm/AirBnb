class Api::BookingsController < ApplicationController
  def create
    @booking = Booking.new(booking_params)
    if @booking.save!
      render 'api/bookings/show'
    else
      render json: ["Invalid start date / end date"], status: 401
    end
  end


  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render 'api/bookings/show'
  end

  private
    def booking_params
      params.require(:booking).permit(:author_id, :office_id, :start_date, :end_date)
    end
end