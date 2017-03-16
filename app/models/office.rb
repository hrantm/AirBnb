class Office < ApplicationRecord
  validates :owner_id, :location, :lat, :lng, :price,  :image_url, :about_this,
  :guest_limit, :desks, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User
end
