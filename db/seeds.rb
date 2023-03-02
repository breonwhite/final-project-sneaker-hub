# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Create users
puts "🌱 Seeding User..." 

buyer = User.create(
    email: "bishop@malinator.com",
    username: "bishopxking",
    first_name: "Bishop",
    last_name: "Bourque",
    phone_number: "1112223333",
    address: "9501 Church Ave",
    city: "Brooklyn",
    state: "NY",
    zipcode: 11212,
    password_digest: BCrypt::Password.create('Password'),
    role: "buyer"
)

seller = User.create(
    email: "twilight@malinator.com",
    username: "twilightcvnt",
    first_name: "Twilight",
    last_name: "Exscada",
    phone_number: "2223334444",
    address: "1274 Pacific Street Apt 9",
    city: "Brooklyn",
    state: "NY",
    zipcode: 11216,
    password_digest: BCrypt::Password.create('Password'),
    role: "seller"
)

puts "🌱 Done seeding User! Now seeding sneakers..."

Sneaker.create(
    name: "Jordan 1 Retro High Shadow 2.0",
    colorway: "BLACK/WHITE-LIGHT SMOKE GREY",
    description: "The upper of the Air Jordan 1 Shadow 2.0 is made of a black leather base with Light Smoke Grey overlays. A classic Wings logo appears on the lateral ankle wrap while a woven Nike Air label is stitched atop the tongue to complete the look.",
    release_date: "2021-05-15",
    image: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-Black-White-Light-Smoke-Grey/Images/Air-Jordan-1-Retro-High-Black-White-Light-Smoke-Grey/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1634929276&h=320&q=57",
    retail_price: "299.99"
)

Sneaker.create(
    name: "adidas Yeezy Foam RNR Onyx",
    colorway: "ONYX/ONYX/ONYX",
    description: "The adidas Yeezy Foam RNR Onyx arrives with an Onyx, oval-cut foam construction made of part EVA and algae. At the base, a cushioned footbed offers comfort and support, while a sculptural sole with deep treads provides traction.",
    release_date: "2022-06-08",
    image: "https://images.stockx.com/360/adidas-Yeezy-Foam-RNNR-Onyx/Images/adidas-Yeezy-Foam-RNNR-Onyx/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1654263493&h=320&q=57",
    retail_price: "80.00"
)

Sneaker.create(
    name: "Jordan 1 Mid Washed Teal (W)",
    colorway: "WASHED TEAL/MINT FOAM-WHITE",
    description: "The Air Jordan 1 Mid Island Green (Women's) is another colorway of the Air Jordan 1 sneakers that first made their debut in 1985. They are high-top sneakers with a lace-up closure design with white laces. The primary color of the shoe is white with island green highlights on the sides where the laces go through, round the heel of the shoe, and at the front where the sole is attached. The Air Jordan 1 Mid Island Green (Women's) also has the Nike Swoosh on the side, the Air Jordan logo on the outer ankle, and the Jumpman logo on the tongue. The Air Jordan 1 Mid Island Green (Women's) was released for retail at the price of $115 in July 2020.",
    release_date: "2022-07-22",
    image: "https://images.stockx.com/360/Air-Jordan-1-Mid-Island-Green-W/Images/Air-Jordan-1-Mid-Island-Green-W/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1654861826&h=320&q=57",
    retail_price: "115.00"
)

puts "🌱 Done seeding Sneakers! Now seeding Listings..."

Listing.create(
    buyer: buyer, 
    seller: seller,
    sneaker_id: 1,
    price: 500.99,
    size: "10M",
    sold: true,
)

Listing.create(
    buyer: buyer, 
    seller: seller,
    sneaker_id: 2,
    price: 100.00,
    size: "11M",
    sold: true,
)

Listing.create(
    seller: seller,
    sneaker_id: 3,
    price: 800.99,
    size: "6M",
    sold: false,
)

puts "🌱 Done Seeding!"
