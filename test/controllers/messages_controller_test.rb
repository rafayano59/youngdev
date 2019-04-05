require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest

  # previous test omitted 

  test "invalid POST create" do
    post create_message_url, params: {
      message: { name: '', email: '', body: '' }
    }

    assert_match /Name .* blank/, response.body
    assert_match /Email .* blank/, response.body
    assert_match /Body .* blank/, response.body
  end
end