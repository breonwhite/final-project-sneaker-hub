Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  #sessions controller
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  post '/signup', to: 'users#create'
  
  get '/statistics', to: 'listings#statistics'
  get '/purchase_summary', to: 'purchases#purchase_summary'
  
  resources :users, only: [:index, :show, :create, :update, :destroy]
  resources :listings, only: [:index, :show, :create, :update, :destroy]
  resources :sneakers, only: [:index, :show, :create, :update, :destroy]
  resources :purchases, only: [:index, :show, :create, :update, :destroy]


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
