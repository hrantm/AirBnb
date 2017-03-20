class Booking < ApplicationRecord
  validates :author, :office, :start_date, :end_date, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :office


end
