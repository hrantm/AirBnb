class Review < ApplicationRecord
  validates :author, :office, :rating, :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :office


end
