class PurchaseSerializer < ActiveModel::Serializer
  attributes :id, :buyer_id, :listing_id, :purchased_at

  belongs_to :buyer, class_name: 'User'
  belongs_to :listing
end
