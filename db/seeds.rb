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
lng: -122.431874, price: 40, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689332/Milan-Office-1_zh2apz.jpg',
about_this: 'desc', guest_limit: 2, desks: 2})


Office.create({owner_id: 1, location: 'Berkeley', lat: 37.862526,
lng: -122.265282, price: 25, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689306/office_2674324b_omcbky.webp',
about_this: 'desc', guest_limit: 4, desks: 4})


Office.create({owner_id: 2, location: 'San Francisco', lat: 37.684593,
lng: -122.442507, price: 15, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689279/images_sthykb.jpg',
about_this: 'desc', guest_limit: 1, desks: 1})


Office.create({owner_id: 2, location: 'Oakland', lat: 37.804959,
lng: -122.303425, price: 55, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689260/a9951a89213b48fb31966c16c7067e6c_ddz51j.jpg',
about_this: 'desc', guest_limit: 4, desks: 4})

Office.create({owner_id: 3, location: 'Los Angeles', lat: 34.064559,
lng: -118.339669, price: 100, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689247/c2e43fdfd0e4e1d556a4fc20f0a46751_gnjoju.jpg',
about_this: 'desc', guest_limit: 2, desks: 2})

Office.create({owner_id: 4, location: 'Los Angeles', lat: 34.095554,
lng: -118.217446, price: 80, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689218/green-office-furniture-classic_lkh2qa.jpg',
about_this: 'desc', guest_limit: 1, desks: 1})


Office.create({owner_id: 4, location: 'Los Angeles', lat: 34.053467,
lng: -118.391854, price: 65, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689155/gty_open_plan_office_ll_130701_33x16_1600_t3jmbm.jpg',
about_this: 'desc', guest_limit: 1, desks: 1})


Office.create({owner_id: 5, location: 'Los Angeles', lat: 34.094424,
lng: -118.305888, price: 90, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689133/download_a9qpax.jpg',
about_this: 'desc', guest_limit: 3, desks: 3})


Office.create({owner_id: 7, location: 'New York', lat: 40.702707,
lng: -73.909370, price: 15, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489689101/3-office-space_ahudii.jpg',
about_this: 'desc', guest_limit: 2, desks: 2})


Office.create({owner_id: 10, location: 'New York', lat: 40.682923,
lng: -73.789550, price: 15, image_url: 'http://res.cloudinary.com/harvey93/image/upload/v1489688894/img1_wj1sm2.jpg',
about_this: 'desc', guest_limit: 2, desks: 2})
