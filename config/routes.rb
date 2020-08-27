Rails.application.routes.draw do
  devise_for :admins, controllers: { omniauth_callbacks: 'admins/omniauth_callbacks' }
  root 'home#index'
  get '*path', to: 'home#index'
  post '/entry', to: 'entry#create'
end
