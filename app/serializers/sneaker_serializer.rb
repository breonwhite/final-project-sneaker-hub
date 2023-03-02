class SneakerSerializer < ActiveModel::Serializer
  attributes :id, :name, :colorway, :description, :release_date, :image, :retail_price

end
