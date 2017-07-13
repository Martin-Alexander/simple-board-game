require 'test_helper'

class MainControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get main_home_url
    assert_response :success
  end

  test "should get move" do
    get main_move_url
    assert_response :success
  end

  test "should get turn" do
    get main_turn_url
    assert_response :success
  end

end
