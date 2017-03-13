# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` - create new user
- `PATCH /api/users` - update user info
- `GET /api/users/:id` - bonus feature, fetch user details for user
    dashboard/profile

### Session

- `POST /api/session` - log in user
- `DELETE /api/session` - log out

### Spots

- `GET /api/spots`
  - spots index/search actions
  - accepts `price`, `start_date`, and `end_date` query params to fetch
      available spots
- `GET /api/spots/:id` - fetch one spot

### Bookings

- `GET /api/bookings` - fetches user bookings
- `POST /api/bookings` - create a booking
- `GET /api/bookings/:id` - fetch one booking
- `DELETE /api/bookings/:id` - cancel a booking

### Reviews

- `GET /api/reviews` - fetches spot's reviews
- `POST /api/reviews` - create a review
- `PATCH /api/reviews/:id` - edit your review
- `DELETE /api/reviews/:id` - delete your review
