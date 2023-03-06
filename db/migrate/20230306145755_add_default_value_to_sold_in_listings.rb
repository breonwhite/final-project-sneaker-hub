class AddDefaultValueToSoldInListings < ActiveRecord::Migration[6.1]
  def change
    change_column :listings, :sold, :boolean, default: false
  end
end
