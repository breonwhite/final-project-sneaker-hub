# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_06_145755) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.bigint "seller_id", null: false
    t.bigint "buyer_id"
    t.bigint "sneaker_id", null: false
    t.decimal "price"
    t.string "size"
    t.boolean "sold", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["buyer_id"], name: "index_listings_on_buyer_id"
    t.index ["seller_id"], name: "index_listings_on_seller_id"
    t.index ["sneaker_id"], name: "index_listings_on_sneaker_id"
  end

  create_table "purchases", force: :cascade do |t|
    t.bigint "buyer_id", null: false
    t.bigint "listing_id", null: false
    t.datetime "purchased_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["buyer_id"], name: "index_purchases_on_buyer_id"
    t.index ["listing_id"], name: "index_purchases_on_listing_id"
  end

  create_table "sneakers", force: :cascade do |t|
    t.string "name"
    t.string "colorway"
    t.text "description"
    t.date "release_date"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.decimal "retail_price"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zipcode"
    t.string "password_digest"
    t.string "role", default: "user"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "listings", "sneakers"
  add_foreign_key "listings", "users", column: "buyer_id"
  add_foreign_key "listings", "users", column: "seller_id"
  add_foreign_key "purchases", "listings"
  add_foreign_key "purchases", "users", column: "buyer_id"
end
