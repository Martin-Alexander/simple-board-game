class MainController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def home
  end

  def move
    ActionCable.server.broadcast "game_channel", {
      move: params[:move]
    }
  end

  def turn
  end
end
