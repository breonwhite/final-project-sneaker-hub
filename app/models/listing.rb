class Listing < ApplicationRecord
    belongs_to :seller, class_name: 'User'
    belongs_to :buyer, class_name: 'User', optional: true
    belongs_to :sneaker
    has_one :purchase
end
