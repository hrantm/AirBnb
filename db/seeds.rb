# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create({email: 'guest@guest.com', password: 'testing123', fname: 'Guest', lname: 'Blank'})
User.create({email: 'harvey@gmail.com', password: 'testing123', fname: 'Harvey', lname: 'Mirijanyan'})
User.create({email: 'marcus@gmail.com', password: 'testing123', fname: 'Marcus', lname: 'Johnson'})
User.create({email: 'jacob@gmail.com', password: 'testing123', fname: 'Jacob', lname: 'Adams'})
User.create({email: 'vazgen@gmail.com', password: 'testing123', fname: 'Vazgen', lname: 'Mikaelyan'})
User.create({email: 'armineh@gmail.com', password: 'testing123', fname: 'Armineh', lname: 'Vardanyan'})
User.create({email: 'armen@gmail.com', password: 'testing123', fname: 'Armen', lname: 'Bangoyan'})
User.create({email: 'adam@gmail.com', password: 'testing123', fname: 'Adam', lname: 'Wallace'})
User.create({email: 'ara@gmail.com', password: 'testing123', fname: 'Ara', lname: 'Minasyan'})

Office.create({owner_id: 1, location: 'San Francisco', lat: 37.784714,
lng: -122.431874, price: 40, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489688894/img1_wj1sm2.jpg',
about_this: 'A beautiful office in the heart of San Francisco. Modern open style for optimum productivity.',
guest_limit: 2, desks: 2})


Office.create({owner_id: 1, location: 'Berkeley', lat: 37.862526,
lng: -122.265282, price: 25, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689101/3-office-space_ahudii.jpg',
about_this: 'Gorgeous open office space in the center of Berkeley. Close to Bart for easy access.', guest_limit: 4, desks: 4})


Office.create({owner_id: 2, location: 'San Francisco', lat: 37.684593,
lng: -122.442507, price: 15, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689155/gty_open_plan_office_ll_130701_33x16_1600_t3jmbm.jpg',
about_this: 'Modern, open space in San Francisco. On the 12th floor with a beautiful view.', guest_limit: 4, desks: 4})


Office.create({owner_id: 2, location: 'Oakland', lat: 37.804959,
lng: -122.303425, price: 55, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490018938/img_0465_entvd5.jpg',
about_this: 'Open office space in downtown Oakland. Modern style and feel.', guest_limit: 1, desks: 1})

Office.create({owner_id: 3, location: 'Los Angeles', lat: 34.064559,
lng: -118.339669, price: 100, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689247/c2e43fdfd0e4e1d556a4fc20f0a46751_gnjoju.jpg',
about_this: 'Beautiful corner office in the heart of Los Angeles. You will love coming to work!', guest_limit: 1, desks: 1})

Office.create({owner_id: 4, location: 'Los Angeles', lat: 34.095554,
lng: -118.217446, price: 80, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689260/a9951a89213b48fb31966c16c7067e6c_ddz51j.jpg',
about_this: 'Open, modern space in downtown LA. No cubicles in sight!', guest_limit: 3, desks: 3})


Office.create({owner_id: 4, location: 'Los Angeles', lat: 34.053467,
lng: -118.391854, price: 65, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689332/Milan-Office-1_zh2apz.jpg',
about_this: 'A modern space to get work done. Simplicity at its best!', guest_limit: 2, desks: 2})


Office.create({owner_id: 5, location: 'Los Angeles', lat: 34.094424,
lng: -118.305888, price: 90, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489979464/18c5543590edce651d9dae0f60615401_zsan58.jpg',
about_this: 'A gorgeous space in Los Angeles. Comes with everything an executive could want.', guest_limit: 1, desks: 1})


Office.create({owner_id: 7, location: 'New York', lat: 40.702707,
lng: -73.909370, price: 15, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489979929/6b498530dfa9f1fd16169e06e6046adc_oqskrs.jpg',
about_this: 'A modern, open space on the hipster side of Brooklyn. A great place to get work done.', guest_limit: 1, desks: 1})


Office.create({owner_id: 9, location: 'New York', lat: 40.682923,
lng: -73.789550, price: 15, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489979469/afe3a3ed124cb421preview-114371-Tayco_View02_t0l829.jpg',
about_this: 'Great workspace in Manhatten. The best place to get some work done!',
guest_limit: 2, desks: 2})

 Booking.create({author_id: 1, office_id: 5, start_date: Date.new(2017, 4, 3),
    end_date: Date.new(2017, 4, 10)})

 Booking.create({author_id: 1, office_id: 2, start_date: Date.new(2017, 4, 15),
    end_date: Date.new(2017, 4, 25)})

 Booking.create({author_id: 1, office_id: 7, start_date: Date.new(2017, 5, 3),
    end_date: Date.new(2017, 6, 10)})

Review.create({author_id: 1, office_id: 2, rating: 4,
  body: 'I had a wonderful time working here.'})

Review.create({author_id: 2, office_id: 1, rating: 1,
  body: 'What a waste of time. Literally got nothing done, and the coffee machine did not work!'})

Review.create({author_id: 1, office_id: 4, rating: 5,
  body: 'The best experience I have ever had using Office Bnb.'})
