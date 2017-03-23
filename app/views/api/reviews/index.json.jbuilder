# json.array! @reviews, :id, :author_id, :office_id, :rating, :body

json.array! @reviews do |review|
  json.id review.id
  json.author_id review.author_id
  json.office_id review.office_id
  json.rating review.rating
  json.body review.body
  json.author review.author.fname
  json.authorId review.author.id
end
