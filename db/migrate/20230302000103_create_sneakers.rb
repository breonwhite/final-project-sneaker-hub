class CreateSneakers < ActiveRecord::Migration[6.1]
  def change
    create_table :sneakers do |t|
      t.string :name
      t.string :colorway
      t.text :description
      t.date :release_date
      t.string :image
      t.string :retail_price

      t.timestamps
    end
  end
end
