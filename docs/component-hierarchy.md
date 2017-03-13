## Component Hierarchy

**HeaderContainer**
 - Header
  * HeaderLoggedIn
  * HeaderLoggedOut
    * LogInModal
      - SessionFormContainer
        * SessionForm
          - SessionLogin
          - SessionSignUp
**HomeContainer**
 - Home
  - FeaturedSpotsContainer
    - FeaturedSpots
      - FeaturedSpotDetail
  - SearchBar

**SearchContainer**
 - Search
  * Search Header
  * SearchResults
  * MapContainer
    - Map

**SpotContainer**
 - Spot
  * SpotDetails
  * Reviews
  * BookingFormContainer
    - BookingForm

**BookingsContainer**
 - Bookings
  * BookingDetail


## Routes

|Path   | Component   |
|-------|-------------|
| "/home" | "HomeContainer" |
| "/search" | "SearchContainer" |
| "/spots/:spotId" | "SpotContainer" |
| "/bookings" | "BookingsContainer" |

<!-- AIzaSyCAu82wym607CAodEPa-NoX6ii6BkKh6AI -->
