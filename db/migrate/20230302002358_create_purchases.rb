class CreatePurchases < ActiveRecord::Migration[6.1]
  def change
    create_table :purchases do |t|
      t.references :buyer, null: false, foreign_key: { to_table: :users }
      t.references :listing, null: false, foreign_key: true
      t.datetime :purchased_at

      t.timestamps
    end
  end
end
