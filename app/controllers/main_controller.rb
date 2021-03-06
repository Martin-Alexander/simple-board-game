class MainController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def home
  end

  def action
    ActionCable.server.broadcast "game_channel", {
      from: params[:from],
      to: params[:to],
      action: params[:myAction],
      token: params[:token],
      type: params[:type]
    }
  end

  def turn
    ActionCable.server.broadcast "game_channel", {
      action: "nextTurn"
    }
  end
end
