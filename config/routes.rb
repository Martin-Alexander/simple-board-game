Rails.application.routes.draw do
  root to: "main#home"
  post "/move", to: "main#move"
  post "/turn", to: "main#turn"
end
