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
lng: -122.431874, price: 40, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1489688894/img1_wj1sm2.jpg',
about_this: 'A beautiful office in the heart of San Francisco. Modern open style for optimum productivity.',
guest_limit: 2, desks: 2})


Office.create({owner_id: 1, location: 'Berkeley', lat: 37.862526,
lng: -122.265282, price: 25, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1489689101/3-office-space_ahudii.jpg',
about_this: 'Gorgeous open office space in the center of Berkeley. Close to Bart for easy access.', guest_limit: 4, desks: 4})


Office.create({owner_id: 2, location: 'San Francisco', lat: 37.684593,
lng: -122.442507, price: 15, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1489689155/gty_open_plan_office_ll_130701_33x16_1600_t3jmbm.jpg',
about_this: 'Modern, open space in San Francisco. On the 12th floor with a beautiful view.', guest_limit: 4, desks: 4})


Office.create({owner_id: 2, location: 'Oakland', lat: 37.804959,
lng: -122.303425, price: 55, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490018938/img_0465_entvd5.jpg',
about_this: 'Open office space in downtown Oakland. Modern style and feel.', guest_limit: 1, desks: 1})

Office.create({owner_id: 3, location: 'Los Angeles', lat: 34.064559,
lng: -118.339669, price: 100, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1489689247/c2e43fdfd0e4e1d556a4fc20f0a46751_gnjoju.jpg',
about_this: 'Beautiful corner office in the heart of Los Angeles. You will love coming to work!', guest_limit: 1, desks: 1})

Office.create({owner_id: 4, location: 'Los Angeles', lat: 34.095554,
lng: -118.217446, price: 80, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1489689260/a9951a89213b48fb31966c16c7067e6c_ddz51j.jpg',
about_this: 'Open, modern space in downtown LA. No cubicles in sight!', guest_limit: 3, desks: 3})


Office.create({owner_id: 4, location: 'Los Angeles', lat: 34.053467,
lng: -118.391854, price: 65, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1489689332/Milan-Office-1_zh2apz.jpg',
about_this: 'A modern space to get work done. Simplicity at its best!', guest_limit: 2, desks: 2})


Office.create({owner_id: 5, location: 'Los Angeles', lat: 34.094424,
lng: -118.305888, price: 90, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1489979464/18c5543590edce651d9dae0f60615401_zsan58.jpg',
about_this: 'A gorgeous space in Los Angeles. Comes with everything an executive could want.', guest_limit: 1, desks: 1})


Office.create({owner_id: 7, location: 'New York', lat: 40.702707,
lng: -73.909370, price: 15, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1489979929/6b498530dfa9f1fd16169e06e6046adc_oqskrs.jpg',
about_this: 'A modern, open space on the hipster side of Brooklyn. A great place to get work done.', guest_limit: 1, desks: 1})


Office.create({owner_id: 9, location: 'New York', lat: 40.682923,
lng: -73.789550, price: 15, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1489979469/afe3a3ed124cb421preview-114371-Tayco_View02_t0l829.jpg',
about_this: 'Great workspace in Manhatten. The best place to get some work done!',
guest_limit: 2, desks: 2})


#REMEMBER TO CHANGE TO HTTPS

Office.create({owner_id: 2, location: 'New York', lat: 40.765663,
lng: -73.972544, price: 125, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490295115/pexels-photo-271560_sbon4f.jpg',
about_this: 'A wonderful workspace on the Upper East Side of Manhatten. The coffee was great, and the view was fantastic.',
guest_limit: 3, desks: 3})

Office.create({owner_id: 2, location: 'New York', lat: 40.753473,
lng: -73.982551, price: 150, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490295665/o_ndqv6g.jpg',
about_this: 'A great office right in the Midtown. Perfect place to hold some meetings or get some work done.',
guest_limit: 5, desks: 5})

Office.create({owner_id: 3, location: 'New York', lat: 40.689220,
lng: -73.984022, price: 15, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490295710/SetWidth1600-121121_LyonsOffice_skvdjg.jpg',
about_this: 'Awesome place to work. Right by Barclays Center.',
guest_limit: 2, desks: 2})

Office.create({owner_id: 5, location: 'New York', lat: 40.720461,
lng: -74.000527, price: 185, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490295744/IMG_4159_1_mmgq29.jpg',
about_this: 'Premium location in Lower Manhatten. Close to public transit for easy transportation.',
guest_limit: 8, desks: 8})

Office.create({owner_id: 9, location: 'New York', lat: 40.678377,
lng: -74.009368, price: 85, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490295748/firm_profi-2.jpg.662x0_q70_crop-scale_ktwqfm.jpg',
about_this: 'Beautiful office in the heart of Brooklyn. Free coffee!',
guest_limit: 3, desks: 3})

Office.create({owner_id: 4, location: 'San Francisco', lat: 37.761250,
lng: -122.388632, price: 125, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490295809/11ae4b83ec3a29e99310dfb7b08b9d25_t8bmtk.jpg',
about_this: 'Hipster office space in the Dog Patch. Come get some work done!',
guest_limit: 2, desks: 2})

Office.create({owner_id: 3, location: 'San Francisco', lat: 37.791380,
lng: -122.401109, price: 165, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490295823/f2a0bdf347a60af30a4771ce255d9f63_e2iomx.jpg',
about_this: 'Professional workspace in the Financial District. Less than 5 minutes from the Montgomery Bart Station.',
guest_limit: 4, desks: 4})

Office.create({owner_id: 6, location: 'San Francisco', lat: 37.755609,
lng: -122.415388, price: 160, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490295852/Keep-Your-Employees-Creative-With-These-Office-Design-Tips_m6umxq.jpg',
about_this: 'A great workspace in the Mission. Free gym included!',
guest_limit: 1, desks: 1})

Office.create({owner_id: 9, location: 'San Francisco', lat: 37.781077,
lng: -122.411714, price: 135, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1490295879/0f337388eceb2cffd89eec0dcc42cb2a_nigqyk.jpg',
about_this: 'Gorgeous workspace right on Market street. Open and modern design.',
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
