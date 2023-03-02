class RemoveIndexfromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_index :users, :username
  end
end
