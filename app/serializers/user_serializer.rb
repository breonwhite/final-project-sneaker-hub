class UserSerializer < ActiveModel::Serializer
  attributes  :id, :email, :username, :first_name, :last_name, :phone_number, :address, :city, :zipcode, :state, :role

end
