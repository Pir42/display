Rails.application.routes.draw do
  root to: "pages_static#index"
  resources :songs, except: :edit
  resources :setlists
  get :broadcast, to: "pages_static#broadcast"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
