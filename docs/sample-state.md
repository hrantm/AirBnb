```js
{
  session: {
    currentUser: {
      id: 1,
      username: "harvey"
    },
    errors: [],  
  },
  spots: {
    1: {
      id: 1,
      price: 60,
      // image_url: "123.jpeg",
      about_this: "Description",
      location: "San Francisco"
      rating: 3,
      reviews: {
        id: 1
        author: "Johnathan",
        body: "great workspace"
      }
    }
    2 : {
      id: 2,
      price: 100,
      image_url: "",
      about_this: "",
      rating: 5,
      reviews: {
        id: 2
        author: "Janice",
        body: "Too loud"
      }
    }
  },
  bookings: {
    1: {
      id: 1,
      spot_name: "Downtown LA Office",
      location: "LA",
      rating: 5,
      description: "desc"
      start_date: 1,
      end_date: 3,
    },
    2: {
      id: 2,
      spot_name: "My office",
      location: "Home",
      rating: 5,
      description: "best office"
      start_date: 1,
      end_date: 3,
    }
  }
}
```
