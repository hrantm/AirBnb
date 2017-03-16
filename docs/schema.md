
## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
fname           | string    | not null, indexed
lname           | string    | not null, indexed
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Offices
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
location    | string    | not null
lat         | float     | not null
lng         | float     | not null
price       | integer   | not null, indexed
image_url   | string    | not null
about_this  | string    | not null
guest_limit | integer   | not null
desks       | integer   | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
office_id     | integer   | not null, foreign key (references office ), indexed
start_date  | date      | not null
end_date    | date      | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
office_id     | integer   | not null, foreign key (references office ), indexed
rating      | integer   | not null,
body        | string    | not null
