class ListingSerializer < ActiveModel::Serializer
  attributes :id, :seller_id, :buyer_id, :sneaker_id, :price, :size, :sold

  belongs_to :seller, class_name: 'User'
  belongs_to :buyer, class_name: 'User', optional: true
  belongs_to :sneaker
end