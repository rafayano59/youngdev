Rails.application.routes.draw do
  get 'contato', to: 'contato#new', as: 'new_contato'
  post 'contato', to: 'contato#create', as: 'create_contato'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

end
