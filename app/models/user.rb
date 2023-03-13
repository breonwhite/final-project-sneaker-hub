class User < ApplicationRecord
    has_secure_password
    
    has_many :listings, foreign_key: :seller_id
    has_many :purchases, foreign_key: :buyer_id
end
