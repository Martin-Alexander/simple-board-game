Rails.application.routes.draw do
  root to: "main#home"
  post "/action", to: "main#action"
  post "/turn", to: "main#turn"
end
