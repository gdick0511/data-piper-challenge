Rails.application.routes.draw do
  resources :users
  resources :clients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/users", to:"users#index"

  post "/newuser", to:"users#create" 
end
