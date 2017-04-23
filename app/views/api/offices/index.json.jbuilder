# json.array! @offices, :id, :owner_id, :location, :lat, :lng, :price, :image_url,
# :about_this, :guest_limit, :desks

json.array! @offices do |office|
  json.id office.id
  json.owner_id office.owner_id
  json.location office.location
  json.lat office.lat
  json.lng office.lng
  json.price office.price
  json.image_url office.image_url
  json.about_this office.about_this
  json.guest_limit office.guest_limit
  json.desks office.desks
  json.average_rating office.average_rating
end
