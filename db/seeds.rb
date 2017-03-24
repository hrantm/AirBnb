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
lng: -73.972544, price: 125, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490295115/pexels-photo-271560_sbon4f.jpg',
about_this: 'A wonderful workspace on the Upper East Side of Manhatten. The coffee was great, and the view was fantastic.',
guest_limit: 3, desks: 3})

Office.create({owner_id: 2, location: 'New York', lat: 40.753473,
lng: -73.982551, price: 150, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490295665/o_ndqv6g.jpg',
about_this: 'A great office right in the Midtown. Perfect place to hold some meetings or get some work done.',
guest_limit: 5, desks: 5})

Office.create({owner_id: 3, location: 'New York', lat: 40.689220,
lng: -73.984022, price: 15, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490295710/SetWidth1600-121121_LyonsOffice_skvdjg.jpg',
about_this: 'Awesome place to work. Right by Barclays Center.',
guest_limit: 2, desks: 2})

Office.create({owner_id: 5, location: 'New York', lat: 40.720461,
lng: -74.000527, price: 185, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490295744/IMG_4159_1_mmgq29.jpg',
about_this: 'Premium location in Lower Manhatten. Close to public transit for easy transportation.',
guest_limit: 8, desks: 8})

Office.create({owner_id: 9, location: 'New York', lat: 40.678377,
lng: -74.009368, price: 85, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490295748/firm_profi-2.jpg.662x0_q70_crop-scale_ktwqfm.jpg',
about_this: 'Beautiful office in the heart of Brooklyn. Free coffee!',
guest_limit: 3, desks: 3})

Office.create({owner_id: 4, location: 'San Francisco', lat: 37.761250,
lng: -122.388632, price: 125, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490295809/11ae4b83ec3a29e99310dfb7b08b9d25_t8bmtk.jpg',
about_this: 'Hipster office space in the Dog Patch. Come get some work done!',
guest_limit: 2, desks: 2})

Office.create({owner_id: 3, location: 'San Francisco', lat: 37.791380,
lng: -122.401109, price: 165, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490295823/f2a0bdf347a60af30a4771ce255d9f63_e2iomx.jpg',
about_this: 'Professional workspace in the Financial District. Less than 5 minutes from the Montgomery Bart Station.',
guest_limit: 4, desks: 4})

Office.create({owner_id: 6, location: 'San Francisco', lat: 37.755609,
lng: -122.415388, price: 160, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490295852/Keep-Your-Employees-Creative-With-These-Office-Design-Tips_m6umxq.jpg',
about_this: 'A great workspace in the Mission. Free gym included!',
guest_limit: 1, desks: 1})

Office.create({owner_id: 9, location: 'San Francisco', lat: 37.781077,
lng: -122.411714, price: 135, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490295879/0f337388eceb2cffd89eec0dcc42cb2a_nigqyk.jpg',
about_this: 'Gorgeous workspace right on Market street. Open and modern design.',
guest_limit: 2, desks: 2})


Office.create({owner_id: 3, location: 'San Francisco', lat: 37.751681,
lng: -122.426579, price: 110, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490306668/58fd3da1881f3a5586e3d2220b2015ff_jboeqa.jpg',
about_this: 'Brand new office space in Noe Valley. Best coffee in town!',
guest_limit: 3, desks: 3})

Office.create({owner_id: 6, location: 'San Francisco', lat: 37.784959,
lng: -122.404652, price: 250, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490306631/sky-office_05_q4lbrl.jpg',
about_this: 'Modern office space in the heart of San Francisco. Right by union square!',
guest_limit: 1, desks: 1})

Office.create({owner_id: 9, location: 'San Francisco', lat: 37.780018,
lng: -122.402162, price: 185, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490306562/85993d1971f425a111adc6907ca478f1_yuynec.jpg',
about_this: 'Exciting new space South Of Market. Best place to get work done in San Francisco!',
guest_limit: 2, desks: 2})

#NEW ONES

Office.create({owner_id: 9, location: 'Oakland', lat: 37.807785,
lng: -122.292555, price: 185, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490324499/Devonshire_Sq_-_Offices-1_og26xh.jpg',
about_this: 'Exciting new space on the west side of Oakland. Beautiful setting and easy access to transportation.',
guest_limit: 2, desks: 2})

Office.create({owner_id: 6, location: 'Oakland', lat: 37.800123,
lng: -122.267838, price: 135, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490313303/brooklyn-heights-office-space-32_nrfus7.jpg',
about_this: 'Great spot in Chinatown. The best area for work and awesome food!',
guest_limit: 2, desks: 2})

Office.create({owner_id: 2, location: 'Oakland', lat: 37.806283,
lng: -122.266143, price: 85, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490308496/hero-inwood_vt0dmz.jpg',
about_this: 'A great workspace in downtown Oakland. Within walking distance of Bart.',
guest_limit: 2, desks: 2})

Office.create({owner_id: 9, location: 'Oakland', lat: 37.783245,
lng: -122.226649, price: 185, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490308462/20140418-TelemetryJW-002_original_uqjo5e.jpg',
about_this: 'Exciting new space in Fruitvale. Best place to get work done in Oakland!',
guest_limit: 2, desks: 2})

Office.create({owner_id: 1, location: 'Berkeley', lat: 37.867678,
lng: -122.255043, price: 200, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490308321/hudson-yards-nyc-10-hudson-yards-open-office-view-south-dv-022012_yf3fbz.jpg',
about_this: 'Great modern space on the South Side of Berkeley. Just 2 blocks away from campus.',
guest_limit: 1, desks: 1})

Office.create({owner_id: 9, location: 'Berkeley', lat:37.872734,
lng: -122.269505, price: 185, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490308220/3021752-slide-s-7-why-square-designed-its-new-offices-to-work-like-a-city_n5iqat.jpg',
about_this: 'Best place to get work done in downtown Berkeley. Within walking distance of the Bart station.',
guest_limit: 1, desks: 1})

Office.create({owner_id: 8, location: 'Berkeley', lat: 37.875436,
lng: -122.272109, price: 175, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490308158/OG-office_ul5pbu.jpg',
about_this: 'A great workspace on the North Side of Berkeley. Amazing coffee and staff!',
guest_limit: 4, desks: 4})

Office.create({owner_id: 9, location: 'Berkeley', lat: 37.866418,
lng: -122.261761, price: 145, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490306816/20470653_yju7qt.jpg',
about_this: 'Wonderful workspace on the South Side. Only 4 blocks from Asian Ghetto!!!',
guest_limit: 2, desks: 2})

Office.create({owner_id: 8, location: 'Berkeley', lat: 37.874241,
lng: -122.269626, price: 125, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490324589/ro_search_record_office_fgo6bb.jpg',
about_this: 'The best workspace in all of North Berkeley. If you want to get work done, you come here!',
guest_limit: 3, desks: 3})

#New Ones

Office.create({owner_id: 8, location: 'San Jose', lat: 37.292563,
lng: -121.837333, price: 125, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490368849/568764_7977e44fea574be9a5957633774271a6-mv2_d_3600_2400_s_4_2.jpg_srz_1515_782_85_22_0.50_1.20_0_wcdvje.jpg',
about_this: 'Modern, open office space in South San Jose. Come in and get some work done!',
guest_limit: 1, desks: 1})

Office.create({owner_id: 9, location: 'San Jose', lat: 37.334613,
lng: -121.824973, price: 145, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490368804/568764_030220eeb9764f9499638d4df7df168c.jpg_srz_1520_1013_85_22_0.50_1.20_0_pqxtcy.jpg',
about_this: 'Great new workspace in East San Jose. Free gym and coffe!',
guest_limit: 3, desks: 3})

Office.create({owner_id: 1, location: 'San Jose', lat: 37.382642,
lng: -121.912864, price: 165, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490368770/2494_037D_ttxqd2.jpg',
about_this: 'The best workspace in all of North San Jose. If you want to get work done, you come here!',
guest_limit: 2, desks: 2})

Office.create({owner_id: 2, location: 'San Jose', lat: 37.328156,
lng: -121.908033, price: 115, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490368582/airbnb-dublin-office-interiors-ireland-offices_dezeen_hero01_lqxgku.jpg',
about_this: 'Great workspace in Downtown San Jose. Free coffee!',
guest_limit: 3, desks: 3})

Office.create({owner_id: 3, location: 'San Jose', lat: 37.330994,
lng: -121.904134, price: 225, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490364044/wework-wonderbread_wvf736.jpg',
about_this: 'The best workspace in all of San Jose. Come and get some work done!',
guest_limit: 3, desks: 3})

Office.create({owner_id: 4, location: 'San Jose', lat: 37.327946,
lng: -121.901490, price: 175, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490364019/57a6a9203ffe5244a130c13d2aebd360_bekprf.jpg',
about_this: 'Modern open space in Downtown San Jose. Close to cal train for easy access to transportation!',
guest_limit: 1, desks: 1})

Office.create({owner_id: 5, location: 'San Jose', lat: 37.350938,
lng: -121.889813, price: 255, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490364008/herzliya-office-space-37_fmvis8.jpg',
about_this: 'Beautiful office space in Japan Town. We have the best staff in the world!',
guest_limit: 2, desks: 2})

Office.create({owner_id: 6, location: 'San Jose', lat: 37.320832,
lng: -121.876188, price: 125, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490363918/7bb8544b2b4a7ae5bd96b045f0eef54b_erx09h.jpg',
about_this: 'New workspace on the South Side of San Jose. Join us and get some work done!',
guest_limit: 4, desks: 4})

Office.create({owner_id: 7, location: 'San Jose', lat: 37.377912,
lng: -121.915766, price: 125, image_url: 'https://res.cloudinary.com/harvey93/image/upload/v1490363874/ebay-Office-Design_mhdn2i.jpg',
about_this: 'Brand new office on the North Side. Free coffee!',
guest_limit: 3, desks: 3})





 Booking.create({author_id: 1, office_id: 5, start_date: Date.new(2017, 4, 3),
    end_date: Date.new(2017, 4, 10)})

 Booking.create({author_id: 1, office_id: 2, start_date: Date.new(2017, 4, 15),
    end_date: Date.new(2017, 4, 25)})

 Booking.create({author_id: 1, office_id: 7, start_date: Date.new(2017, 5, 3),
    end_date: Date.new(2017, 6, 10)})


#Office 1
Review.create({author_id: 2, office_id: 1, rating: 1,
  body: 'What a waste of time. Literally got nothing done, and the coffee machine did not work!'})

Review.create({author_id: 3, office_id: 1, rating: 5,
  body: 'I had an amazing experience. The staff was so accomodating!'})

Review.create({author_id: 4, office_id: 1, rating: 3,
  body: 'Could have been better, but I got a lot of work done!'})


#Office 2
Review.create({author_id: 5, office_id: 2, rating: 4,
  body: 'One of my favorite places to hold meetings!'})

Review.create({author_id: 6, office_id: 2, rating: 2,
  body: 'Ehh, not the best :('})

#Office 3
Review.create({author_id: 7, office_id: 4, rating: 5,
  body: 'The best experience I have ever had using Office Bnb.'})

Review.create({author_id: 8, office_id: 4, rating: 3,
  body: 'The space is amazing, but the staff can be rude at times.'})

Review.create({author_id: 9, office_id: 4, rating: 1,
  body: 'Hate the staff. Ugghh!'})

Review.create({author_id: 2, office_id: 4, rating: 3,
  body: 'Not bad, a little noisier than I would have liked.'})

Review.create({author_id: 3, office_id: 4, rating: 5,
  body: 'The coffee here is sooooo good!'})

#Office 4
Review.create({author_id: 4, office_id: 5, rating: 1,
  body: 'Traaaaasshhhhhhh. Hated it!'})

Review.create({author_id: 5, office_id: 5, rating: 2,
  body: 'Do not like it here at all. Would literally go to a public library!'})

Review.create({author_id: 6, office_id: 5, rating: 2,
  body: 'Hate this place, I get more work done at Starbucks!'})

#Office 5
Review.create({author_id: 7, office_id: 6, rating: 5,
  body: 'Wow, I really cannot think of a time that I was more productive!'})

Review.create({author_id: 8, office_id: 6, rating: 4,
  body: 'One of the gems in the city. Great coffee, awesome staff!'})

Review.create({author_id: 9, office_id: 6, rating: 5,
  body: 'I love this place!'})

Review.create({author_id: 2, office_id: 6, rating: 4,
  body: 'All the reviews are right. This place was awesome!'})

#Office 6
Review.create({author_id: 7, office_id: 4, rating: 3,
  body: 'Not the best office space, but good price.'})

Review.create({author_id: 8, office_id: 4, rating: 5,
  body: 'My favorite place by far.'})

#Office 6
Review.create({author_id: 9, office_id: 4, rating: 3,
  body: 'Not the best office space, but good price.'})
