class PurchasesController < ApplicationController
    
    def index
        purchases = Purchase.where(buyer_id: current_user.id)
        render json: purchases
    end


    def create
        listing = Listing.find(params[:listing_id])
        purchase = Purchase.new(listing_id: listing.id, buyer_id: current_user.id, purchased_at: Time.now)
      
        if purchase.save
          # Update the listing
          listing.update(sold: true, buyer_id: current_user.id)
          render json: { 
            purchase: purchase.as_json(include: [:buyer, listing: { include: [:seller, :sneaker] }]),
            listing: listing.as_json(include: [:buyer, :seller, :sneaker]), 
            listings: Listing.all.as_json(include: [:buyer, :sneaker]) 
            }
        else
          render json: purchase.errors, status: :unprocessable_entity
        end
    end

    def purchase_summary
        purchases = Purchase.where(buyer_id: current_user.id)
        total_spent = purchases.includes(:listing).sum { |purchase| purchase.listing.price }
        num_purchases = purchases.count
      
        render json: {
          total_spent: total_spent,
          num_purchases: num_purchases,
        }
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
