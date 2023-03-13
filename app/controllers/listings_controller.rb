class ListingsController < ApplicationController

    def index
        listings = Listing.all
        render json: listings
    end

    def create
        seller = current_user
        sneaker = Sneaker.create(sneaker_params)
        listing = Listing.new(listing_params)
        listing.seller_id = seller.id
        listing.sneaker_id = sneaker.id
    
        if listing.save
          render json: listing, status: :created
        else
          render json: listing.errors, status: :unprocessable_entity
        end
    end

    def update
      listing = Listing.find(params[:id])
      if listing.seller.id == current_user.id
        listing.update(listing_params)
        render json: { listing: listing.as_json(include: :sneaker), listings: Listing.all }
      else
        render json: {error: "You're not authorized to update this listing"}, status: :unauthorized
      end
    end

    def destroy
      listing = Listing.find_by(id: params[:id])
      if listing
        listing.destroy
        render json: {}, status: :no_content
      else
          render json: "Not found"
      end   
    end 

    def statistics
      user_listings = Listing.where(seller_id: current_user.id)
      total_listings = user_listings.count
      active_listings = user_listings.where(sold: false).count
      purchased_listings = user_listings.where(sold: true).count
      gross_sales = user_listings.sum(:price)
      total_income = user_listings.where(sold: true).sum(:price)
    
      render json: {
        total_listings: total_listings,
        active_listings: active_listings,
        purchased_listings: purchased_listings,
        gross_sales: gross_sales,
        total_income: total_income
      }
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end
    
    def sneaker_params
      params.require(:sneaker).permit(:name, :colorway, :description, :release_date, :image, :retail_price)
    end
    
    def listing_params
      params.require(:listing).permit(:price, :size)
    end

end
