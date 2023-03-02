class PurchasesController < ApplicationController
    def index
        purchases = Purchase.all
        render json: purchases
    end 
end
