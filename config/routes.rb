Rails.application.routes.draw do
  root "cats#index"
  get "summary", to: "cats#summary"
end
