Rails.application.routes.draw do
  resources :pokemons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pokemons#index'
  get '/api/pokemons', to: 'pokemons#api_index'
end
