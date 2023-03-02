class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.references :seller, null: false, foreign_key: { to_table: :users }
      t.references :buyer, foreign_key: { to_table: :users }
      t.references :sneaker, null: false, foreign_key: true
      t.decimal :price
      t.string :size
      t.boolean :sold

      t.timestamps
    end
  end
end
