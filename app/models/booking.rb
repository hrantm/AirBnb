class Booking < ApplicationRecord
  validates :author, :office, :start_date, :end_date, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :office

  def self.overlapping?(booking)
    new_start = booking.start_date
    new_end = booking.end_date
    overlapping_bookings = Booking.where(office_id: booking.office_id).where(<<-SQL, new_start, new_end)
      NOT ((end_date < ?) OR (start_date > ?))
    SQL
    overlapping_bookings == [] ? false : true
  end
  # !( B(s) > A(e) || A(s) > B(e) )
  # B(s) > A(e) || A(s) > B(e)
  # CatRentalRequest
  # .where.not(id: self.id)
  # .where(cat_id: cat_id)
  # .where(<<-SQL, start_date: start_date, end_date: end_date)
  #    NOT( (start_date > :end_date) OR (end_date < :start_date) )
  # SQL
end
