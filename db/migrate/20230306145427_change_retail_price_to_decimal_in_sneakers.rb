class ChangeRetailPriceToDecimalInSneakers < ActiveRecord::Migration[6.1]
  def change
    remove_column :sneakers, :retail_price
    add_column :sneakers, :retail_price, :decimal
  end
end
