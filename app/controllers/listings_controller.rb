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

    
    
    # def new
    #     @listing = Listing.new
    #     @sneakers = Sneaker.all
    # end
    
    # def create
    #     @listing = current_user.listings.build(listing_params)
    #     if @listing.save
    #       redirect_to listings_path, notice: "Listing successfully created"
    #     else
    #       @sneakers = Sneaker.all
    #       render :new
    #     end
    # end
    
    # def show
    #     @listing = Listing.find(params[:id])
    # end
    
    # def edit
    #     @listing = Listing.find(params[:id])
    #     @sneakers = Sneaker.all
    # end

    # def update
    #     @listing = Listing.find(params[:id])
    #     if @listing.update(listing_params)
    #       redirect_to listings_path, notice: "Listing successfully updated"
    #     else
    #       @sneakers = Sneaker.all
    #       render :edit
    #     end
    # end
    
    # private
    
    # def listing_params
    #     params.require(:listing).permit(:sneaker_id, :price)
    # end
    
    # def require_seller
    #     unless current_user && current_user.seller?
    #       redirect_to root_path, alert: "You need to be a seller to access this page"
    #     end
    # end
end
