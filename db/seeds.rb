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
    email: "bishop1000@mailinator.com",
    username: "bishopxking",
    first_name: "Bishop",
    last_name: "Bourque",
    phone_number: "111-333-3333",
    address: "9501 Church Ave",
    city: "Brooklyn",
    state: "NY",
    zipcode: 11212,
    password_digest: BCrypt::Password.create('1Password'),
    role: "buyer"
)

seller = User.create(
    email: "twilightexscada1000@mailinator.com",
    username: "twilightcvnt",
    first_name: "Twilight",
    last_name: "Exscada",
    phone_number: "222-333-4444",
    address: "1274 Pacific Street Apt 9",
    city: "Brooklyn",
    state: "NY",
    zipcode: 11216,
    password_digest: BCrypt::Password.create('1Password'),
    role: "seller"
)

user = User.create(
    email: "badbunnyx1000@mailinator.com",
    username: "badxbunny",
    first_name: "Bad Bunny",
    last_name: "Ocasio",
    phone_number: "305-489-0967",
    address: "4325 Poplar Lane",
    city: "Miami",
    state: "FL",
    zipcode: 33131,
    password_digest: BCrypt::Password.create('1Password'),
    role: "user"
)

puts "🌱 Done seeding User! Now seeding sneakers..."

#Twilight Listed Sneakers
#1
Sneaker.create(
    name: "MSCHF Big Red Boot",
    colorway: "RED",
    description: "MSCHF's Big Red Boot, described as 'Cartoon boot for a Cool 3D World,' released February of 2023. The oversize silhouette is a giant abstraction of a boot form, and recalls classic cartoon and game shoe designs. The boots are constructed from a single TPU rubber exterior shell with an EVA interior. Features a MSCHF mark on the sole tread. Boots run true to size; calf apertures range from 368-425mm diameter.",
    release_date: "2023-02-16",
    image: "https://images.stockx.com/360/MSCHF-Big-Red-Boot/Images/MSCHF-Big-Red-Boot/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1675973928&h=384&q=57",
    retail_price: 350.00
)

#2
Sneaker.create(
    name: "Jordan 1 Mid Washed Teal (W)",
    colorway: "WASHED TEAL/MINT FOAM-WHITE",
    description: "The Air Jordan 1 Mid Island Green (Women's) is another colorway of the Air Jordan 1 sneakers that first made their debut in 1985. They are high-top sneakers with a lace-up closure design with white laces. The primary color of the shoe is white with island green highlights on the sides where the laces go through, round the heel of the shoe, and at the front where the sole is attached. The Air Jordan 1 Mid Island Green (Women's) also has the Nike Swoosh on the side, the Air Jordan logo on the outer ankle, and the Jumpman logo on the tongue. The Air Jordan 1 Mid Island Green (Women's) was released for retail at the price of $115 in July 2020.",
    release_date: "2022-07-22",
    image: "https://images.stockx.com/360/Air-Jordan-1-Mid-Island-Green-W/Images/Air-Jordan-1-Mid-Island-Green-W/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1654861826&h=320&q=57",
    retail_price: 115.00
)

#3
Sneaker.create(
    name: "Jordan 1 Retro High OG Chicago Lost and Found",
    colorway: "VARSITY RED/BLACK-SAIL-MUSLIN",
    description: "The original Air Jordan 1 Chicago colorway was first introduced in 1985 and has only been retroed a few times since. But 2022 is the year that the colorway returns with an added vintage look. Pre-yellowed accents and cracked leather uppers showcase a fabricated look of age and wear. The Air Jordan 1 Lost and Found Chicago released in November of 2022 for $180.",
    release_date: "2022-11-19",
    image: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1665692308&h=384&q=57",
    retail_price: 180.00
)

#4
Sneaker.create(
    name: "AF1 Tiffany and Co.",
    colorway: "BLACK/MULTI-COLOR",
    description: "Tiffany & Co. and Nike have teamed up on this limited edition release of the Air Force 1 Low. At StockX, we're offering one lucky winner the opportunity to win a pair of the legendary sneakers for the low Bid of just $1 USD.",
    release_date: "2023-03-07",
    image: "https://images.stockx.com/images/AF1-Tiffany-and-Co-ReStockX.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1677695467&q=57",
    retail_price: 400.00
)

#5
Sneaker.create(
    name: "adidas Yeezy Foam RNR Onyx",
    colorway: "ONYX/ONYX/ONYX",
    description: "The adidas Yeezy Foam RNR Onyx arrives with an Onyx, oval-cut foam construction made of part EVA and algae. At the base, a cushioned footbed offers comfort and support, while a sculptural sole with deep treads provides traction.",
    release_date: "2022-06-08",
    image: "https://images.stockx.com/360/adidas-Yeezy-Foam-RNNR-Onyx/Images/adidas-Yeezy-Foam-RNNR-Onyx/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1654263493&h=320&q=57",
    retail_price: 80.00
)

#6
Sneaker.create(
    name: "Jordan 3 Retro White Cement (2011)",
    colorway: "WHITE/CEMENT GREY-FIRE RED",
    description: "The Nike Air Jordan III Retro White/Cement from 2011 was a long overdue release. By 2011, the White Cement Jordan III had sat in the vault at Nike since the 2003 release. Which meant, for most sneakerheads, you had already burned through at least a pair or two of the iconic Jordan 3 sneaker. This variation of the White Cement Jordan III Retro was the first time it became a problem that the 'Nike Air' wasn't on the heel of the shoe. Purists might have been offish with the 2003 release but it became mainstream to complain about the Jumpman on the heel thanks to platforms like Twitter and Instagram. Outside of sneaker enthusiasts, however, it didn't matter because the memories of the 1988 Dunk Contest, and MJ taking off from the free throw line still conjured up memories for Chicago Bulls and Michael Jordan fans. The 2011 Jordan III sold well initially, selling out in most places rather quickly but restocks meant getting your hands on a pair wasn't impossible, especially considering the latte January release that meant plenty of holiday money burning a hole in the pockets of sneaker enthusiasts. In terms of quality and availability, the 2011 Air Jordan Retro 3 White Cement might be the lowest of all the original colorway Jordan 3s but it will always have a mass appeal that most sneakers will never have thanks to Michael Jordan.",
    release_date: "2011-01-22",
    image: "https://images.stockx.com/360/Air-Jordan-1-Mid-Island-Green-W/Images/Air-Jordan-1-Mid-Island-Green-W/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1654861826&h=320&q=57",
    retail_price: 150.00
)

#Bishop's Sneaker
#7
Sneaker.create(
    name: "Jordan 1 Retro High OG True Blue",
    colorway: "TRUE BLUE/WHITE/CEMENT GREY",
    description: "The Air Jordan 1 Retro High OG True Blue was a special release that marks the 35th anniversary of the Air Jordan 3 line.",
    release_date: "2023-07-22",
    image: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-True-Blue/Images/Air-Jordan-1-Retro-High-OG-True-Blue/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1674030278&h=384&q=57",
    retail_price: 180.00
)

#8
Sneaker.create(
    name: "Jordan 11 Retro Cool Grey (2021)",
    colorway: "MEDIUM GREY/MULTI-COLOR/MULTI-COLOR",
    description: "Since its debut in 2001, the Air Jordan 11 Cool Grey has become one of the most celebrated colorways in the Jordan 11 catalog. The Air Jordan 11 Cool Grey (2021) features a Cool Grey Durabuck upper with patent leather overlays and a signature Jumpman embroidery on the collar. From there, a white midsole and an icy blue translucent outsole complete the design.",
    release_date: "2021-12-11",
    image: "https://images.stockx.com/360/Air-Jordan-11-Retro-Cool-Grey-2021/Images/Air-Jordan-11-Retro-Cool-Grey-2021/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635726052&h=384&q=57",
    retail_price: 225.00
)

#9
Sneaker.create(
    name: "Nike Dunk Low Next Nature Pale Coral (W)",
    colorway: "WHITE/LIGHT PINK-GREY",
    description: "Constructed of 50% recycled materials, the women's Nike Dunk Low Next Nature Pale Coral (W) features a white Flyleather upper with Pale Coral overlays and Swooshes. From there, matching soles and woven tongue labels complete the design.",
    release_date: "2021-11-03",
    image: "https://images.stockx.com/360/Nike-Dunk-Low-Move-To-Zero-Pale-Coral-W/Images/Nike-Dunk-Low-Move-To-Zero-Pale-Coral-W/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1636409331&h=320&q=57",
    retail_price: 100.00
)

#10
Sneaker.create(
    name: "Nike Dunk Low Retro White Black Panda (2021)",
    colorway: "WHITE/BLACK",
    description: "From the school-spirited College Colors Program to the vibrant Nike CO.JP collection, Nike Dunks have seen many colorways since the design’s inception in 1985. But with each new colorway, the Dunk’s classic color-blocking has remained in some capacity. Nike put its timeless color-blocking to work with the Nike Dunk Low Retro White Black.",
    release_date: "2021-03-10",
    image: "https://images.stockx.com/360/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1644250003&h=384&q=57",
    retail_price: 110.00
)

#Bad Bunny Sneaker
#11
Sneaker.create(
    name: "Jordan 1 Retro High J Balvin",
    colorway: "MULTI-COLOR/BLACK-PINK FOAM-MULTI-COLOR",
    description: "During the halftime performance at Super Bowl LIV, Latin sensation J Balvin unveiled a pair of signature tie-dye Jordan 1s that the world had never seen before. Then, in December of 2020, J Balvin and Jordan Brand got psychedelic and released the Air Jordan 1 High J Balvin.",
    release_date: "2020-12-08",
    image: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-J-Balvin/Images/Air-Jordan-1-Retro-High-J-Balvin/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635279421&h=384&q=57",
    retail_price: 190.00
)

#12
Sneaker.create(
    name: "Jordan 4 Retro Off-White Sail (W)",
    colorway: "SAIL/MUSLIN-WHITE-BLACK",
    description: "Jordan Brand and Virgil Abloh teamed up once again to release the third silhouette in their collaborative history with the women's Jordan 4 Retro Off-White Sail (W), now available on StockX. After teasing the release of the Off-White 4 with samples in his MCA exhibit and presenting them in his Off-White FW2020 Women’s Show, Virgil Abloh finally delivered what might be the most anticipated release of 2020.",
    release_date: "2020-07-25",
    image: "https://images.stockx.com/360/Air-Jordan-4-Retro-Off-White-Sail-W/Images/Air-Jordan-4-Retro-Off-White-Sail-W/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1634934807&h=384&q=57",
    retail_price: 200.00
)

#13
Sneaker.create(
    name: "Jordan 1 Retro High Shattered Backboard 3.0",
    colorway: "BLACK/PALE VANILLA-STARFISH",
    description: "Jordan Brand adds to its Shattered Backboard lineage with the Jordan 1 Retro High Shattered Backboard 3.0, now available on StockX. This colorway was inspired by the orange and black jersey that Michael wore when he shattered a backboard in an Italian exhibition game in 1986.",
    release_date: "2019-10-26",
    image: "https://images.stockx.com/360/Air-Jordan-1-Retro-High-Shattered-Backboard-3/Images/Air-Jordan-1-Retro-High-Shattered-Backboard-3/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1634935276&h=384&q=57",
    retail_price: 160.00
)

#14
Sneaker.create(
    name: "Jordan 1 Retro Low OG SP Fragment x Travis Scott",
    colorway: "WHITE/BLACK-ROYAL- SAIL",
    description: "The Air Jordan 1 Low Fragment Design x Travis Scott nods to the original 2016 Air Jordan 1 Fragment with its simple color blocking. It features a smooth white leather upper with black and royal blue leather overlays. From there, a signature reversed Swoosh and yellowed soles add a Cactus Jack flair to the classic silhouette.",
    release_date: "2021-08-13",
    image: "https://images.stockx.com/360/Air-Jordan-1-Low-fragment-design-x-Travis-Scott/Images/Air-Jordan-1-Low-fragment-design-x-Travis-Scott/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1635183978&h=384&q=57",
    retail_price: 150.00
)

#15
Sneaker.create(
    name: "Jordan 5 Retro Off-White Sail",
    colorway: "SAIL/FIRE RED-MUSLIN-BLACK",
    description: "Virgil Abloh added a second colorway to his Jordan 5 collaboration with the Jordan 5 Retro High Off-White Sail, now available on StockX. This release pays homage to the first Jordan that Virgil ever owned, the Air Jordan 5. In signature fashion, Virgil has reimagined this classic silhouette in a way that embraces the importance of Nike Air technology.",
    release_date: "2020-10-29",
    image: "https://images.stockx.com/360/Air-Jordan-5-Retro-Off-White-Sail/Images/Air-Jordan-5-Retro-Off-White-Sail/Lv2/img01.jpg?fm=avif&auto=compress&w=576&dpr=1&updated_at=1634912392&h=384&q=57",
    retail_price: 225.00
)

puts "🌱 Done seeding Sneakers! Now seeding Listings..."

# For Sneaker 1
Listing.create(
    seller_id: seller,
    sneaker_id: 1,
    price: 1150.00,
    size: "10M",
    sold: false,
)

#For Sneaker 2
Listing.create(
    seller_id: seller,
    sneaker_id: 2,
    price: 700.00,
    size: "11M",
    sold: false,
)

#For Sneaker 3
Listing.create(
    seller_id: seller,
    sneaker_id: 3,
    price: 600.99,
    size: "6M",
    sold: false,
)

# For Sneaker 4
Listing.create(
    seller_id: seller,
    sneaker_id: 4,
    price: 500.00,
    size: "10M",
    sold: false,
)

#For Sneaker 5
Listing.create(
    buyer_id: buyer, 
    seller_id: seller,
    sneaker_id: 5,
    price: 100.00,
    size: "11M",
    sold: true,
)

#For Sneaker 6
Listing.create(
    buyer_id: buyer,
    seller_id: seller,
    sneaker_id: 6,
    price: 300.85,
    size: "6M",
    sold: true,
)

# For Sneaker 7
Listing.create(
    seller_id: buyer,
    sneaker_id: 7,
    price: 500.99,
    size: "10M",
    sold: false,
)

#For Sneaker 8
Listing.create(
    seller_id: buyer,
    sneaker_id: 8,
    price: 100.00,
    size: "11M",
    sold: false,
)

#For Sneaker 9
Listing.create(
    buyer_id: seller,
    seller_id: buyer,
    sneaker_id: 9,
    price: 800.99,
    size: "6M",
    sold: true,
)

#For Sneaker 10
Listing.create(
    seller_id: buyer,
    buyer_id: seller,
    sneaker_id: 10,
    price: 800.99,
    size: "6M",
    sold: true,
)

#Bad Bunny Listings
#For Sneaker 11
Listing.create(
    seller_id: user,
    sneaker_id: 11,
    price: 1000.85,
    size: "12M",
    sold: false,
)

# For Sneaker 12
Listing.create(
    seller_id: user,
    sneaker_id: 12,
    price: 100.00,
    size: "12M",
    sold: false,
)

#For Sneaker 13
Listing.create(
    seller_id: user,
    sneaker_id: 13,
    price: 200.00,
    size: "11M",
    sold: false,
)

#For Sneaker 14
Listing.create(
    seller_id: user,
    sneaker_id: 14,
    price: 800.50,
    size: "10M",
    sold: false,
)

#For Sneaker 15
Listing.create(
    seller_id: user,
    sneaker_id: 15,
    price: 3000.00,
    size: "12M",
    sold: false,
)

puts "🌱 Done seeding Listings! Now seeding Purchases..."

Purchase.create(
    buyer_id: 1,
    listing_id: 5,
    purchased_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now)
)

Purchase.create(
    buyer_id: 1,
    listing_id: 6,
    purchased_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now)
)

Purchase.create(
    buyer_id: 2,
    listing_id: 9,
    purchased_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now)
)

Purchase.create(
    buyer_id: 2,
    listing_id: 10,
    purchased_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now)
)

puts "🌱 Done Seeding!"
