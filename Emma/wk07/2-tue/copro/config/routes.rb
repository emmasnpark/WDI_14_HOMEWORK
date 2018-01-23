Rails.application.routes.draw do
  resources :projects
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'pages#home'
  get '/login', to: 'sessions#new'
  post '/session', to: 'sessions#create'
end
