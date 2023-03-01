class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :address
      t.string :city
      t.string :state
      t.integer :zipcode
      t.string :password_digest
      t.string :role, default: "user"

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
  end
end
