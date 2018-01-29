Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :projects, only: [:new, :create, :show] #I do not want to people delete or update projects or except: [:edit, :delete]
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'pages#home'
  get '/login', to: 'sessions#new'
  post '/session', to: 'sessions#create'
  delete '/session', to: 'sessions#destroy'
end
