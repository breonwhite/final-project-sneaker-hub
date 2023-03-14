class User < ApplicationRecord
    has_secure_password
    validates :first_name, :last_name, :email, :password, presence: true
    
    has_many :listings, foreign_key: :seller_id
    has_many :purchases, foreign_key: :buyer_id
end
