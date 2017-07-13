Rails.application.routes.draw do
  get '/home', to: "main#home"
  post '/move', to: "main#move"
  post '/turn', to: "main#turn"
end
