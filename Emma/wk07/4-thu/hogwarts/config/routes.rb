Hogwarts::Application.routes.draw do

  root "pages#index"
  resources :houses, only: [:index, :show]
  resources :students, only: [:index, :show, :new, :create]

end
