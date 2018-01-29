Rails.application.routes.draw do
  resources :dishes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #controler file and method
  get '/', to: 'pages#home'
  get '/about', to: 'pages#about'
  # get 'dishes/:id' to: 'dishes#show'

end
