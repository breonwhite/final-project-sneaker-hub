class PurchasesController < ApplicationController
    def index
        purchases = Purchase.all
        render json: purchases
    end

    def create
        listing = Listing.find(params[:listing_id])
        purchase = Purchase.new(listing_id: listing.id, buyer_id: current_user.id)
        
        if purchase.save
          # Update the listing
          listing.update(sold: true, buyer_id: current_user.id)
          render json: purchase, status: :created
        else
            render json: purchase.errors, status: :unprocessable_entity
        end
    end


    private
    
    def current_user
        User.find_by(id: session[:user_id])
    end
    
    #   def sneaker_params
    #     params.require(:sneaker).permit(:name, :colorway, :description, :release_date, :image, :retail_price)
    #   end
    
    #   def listing_params
    #     params.require(:listing).permit(:price, :size)
    #   end
end
