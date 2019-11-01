Rails.application.routes.draw do
  resources :questions
  resources :stats
  resources :quizzes
  resources :movies
  resources :users
  resources :answers
  resources :results 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
