# json.array! @bookings, :id, :author_id, :office_id, :start_date, :end_date

json.array! @bookings do |booking|
  json.id booking.id
  json.author_id booking.author_id
  json.office_id booking.office_id
  json.start_date booking.start_date
  json.end_date booking.end_date
  json.location booking.office.location
  json.image_url booking.office.image_url
  json.guest_limit booking.office.guest_limit
  json.price booking.office.price
  json.days (booking.end_date - booking.start_date).to_i
  json.desc booking.office.about_this
end
