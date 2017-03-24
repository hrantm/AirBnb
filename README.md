#OfficeBnB
[heroku link][heroku]
[heroku]: https://air-bnb-office.herokuapp.com/#/

Office BnB is a platform to connect you to available office space in your area. It is a web application, inspired by Airbnb, and built using Ruby on Rails on the backend, a PostgresSQL database, and React/Redux framework on the frontend.

##Features and Implementation

###Offices

On the backend, offices are stored in the database with columns for id, owner_id, location, latitude, longitude, price, image_url, about_this, guest_limit, and desks.

Offices are rendered at / in the Office component. Here they show their image, and location and are a link to the OfficeDetails component.

In the OfficeDetails component, offices are rendered listing all information about the office, including reviews.

Offices are also rendered at /search which makes an API call to fetch offices filtered by availability, price, and location.

###Office Search with google maps

There are two active search bars, one at / and another at /search that allow for location, date entry as well as number of guests. When the search form is submitted on the home page, users are redirected to the search page where their filtered results are available.

At /search, a google map is rendered with markers for each spot whose coordinates lie within the bounds of the map. The map actively filters the rendered spots as the map is moved or zoomed.

###Bookings

Users can book office space by making bookings which are stored in the database. Bookings have columns for user_id, office_id, start_date, and end_date. Bookings are restricted by their availability based on office and dates booked.

Bookings are rendered at /:id/bookings, filtered for the logged in user who can view and cancel their bookings.

###Reviews

Logged in users can leave reviews for offices. Review ratings are input and viewed as stars on the OfficeDetails page. Reviews are stored in the database with a user_id, spot_id, and a body.

Reviews are rendered in the OfficeDetails component, filtered for that office.
